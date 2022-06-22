(define console-elem (getelem "#console"))
(define repl-input-elem (getelem "#replInput"))
(define *history* '())
(define *history-index* 0)

(define (print str)
  (set-content! "#console"
                (string-append (element-content (getelem "#console")) str "\n")))

(print "BiwaScheme-Calc 0.8.1 num short, def
(a)dd (s)ubtr (d)iv (m)ult (e x: sci.not.)
(avg) (reset) Up/Down history, q: last val
single number x: (a q x), (a) resets q
(def x val)
")

(define a +)
(define s -)
(define d /)
(define m *)
(define (avg . args)
  (/ (apply + args)
     (length args)))
(define (reset) (js-eval "window.location.reload(true);"))
(define q 0)

(define (e x)
  (print (js-eval (string-append "(" (number->string x) ").toExponential()"))))

(define (set-input str)
  (js-eval (string-append "document.getElementById('replInput').value = '" str "';")))

(define (repl-run)
  (let ((raw-input (regexp-replace-all "def " (element-content repl-input-elem) "define ")))
    (let ((input-str (string-append "("
                                    (if (number? (string->number raw-input))
                                        (string-append "a q " raw-input)
                                        raw-input)
                                    ")")))
      (if (not (string=? input-str "()"))
          (begin
            (set! *history-index* -1)
            (set! *history* (cons (element-content repl-input-elem) *history*))
            (print input-str)
            (let ((exp-result (eval (read (open-input-string input-str)))))
              (cond ((string? exp-result) (print exp-result))
                    ((number? exp-result) (print (number->string exp-result)) (set! q exp-result))
                    ((symbol? exp-result) (print (symbol->string exp-result))))
              (print "")
              (set-input "")
              (js-eval "document.getElementById('console').scrollTop = document.getElementById('console').scrollHeight;")))))))

(add-handler! "#replRun" "click"
              (lambda (event)
                (repl-run)
                (js-eval "document.getElementById('replInput').focus();")))

(add-handler! "#replInput" "keyup"
              (lambda (event)
                (let ((key-code (js-ref event "keyCode")))
                  (cond ((= key-code 13) (repl-run))
                        ((= key-code 38)
                         (begin
                           (set! *history-index* (min (- (length *history*) 1) (+ *history-index* 1)))
                           (set-input (list-ref *history* *history-index*))))
                        ((= key-code 40)
                         (begin
                           (set! *history-index* (max -1 (- *history-index* 1)))
                           (if (= *history-index* -1)
                               (begin
                                 (set-input "")
                                 (js-eval "document.getElementById('replInput').focus();"))
                               (set-input (list-ref *history* *history-index*)))))))))

;; history buttons
(add-handler! "#historyUp" "click"
              (lambda (event)
                (set! *history-index* (min (- (length *history*) 1) (+ *history-index* 1)))
                (set-input (list-ref *history* *history-index*))))

(add-handler! "#historyDown" "click"
              (lambda (event)
                (set! *history-index* (max -1 (- *history-index* 1)))
                (if (= *history-index* -1)
                    (begin
                      (set-input "")
                      (js-eval "document.getElementById('replInput').focus();"))
                    (set-input (list-ref *history* *history-index*)))))

(add-handler! "#clearInput" "click"
              (lambda (event)
                (set-input "")
                (js-eval "document.getElementById('replInput').focus();")))

(add-handler! "#showSci" "click"
              (lambda (event) (e q)
                      (print "")
                      (js-eval "document.getElementById('replInput').focus();")))
