(define console-elem (getelem "#console"))
(define repl-input-elem (getelem "#replInput"))
(define *history* '())
(define *history-index* 0)

(define (print str)
  (set-content! "#console"
                (string-append (element-content (getelem "#console")) str "\n")))

(print "Biwa-Mod 0.7.5 Calc v0.2, q stores last value.
(a)dd (s)ubtract (d)ivide (m)ultiply a(v)erage e(x)pt (reload)
Up/Down for history
")

(define a +)
(define s -)
(define d /)
(define m *)
(define (v . args)
  (/ (apply + args)
     (length args)))
(define x expt)
(define (reload) (js-eval "window.location.reload(true);"))
(define q 0)

(define (set-input str)
  (js-eval (string-append "document.getElementById('replInput').value = '" str "';")))

(define (repl-run)
  (let ((input-str (string-append "(" (element-content repl-input-elem) ")")))
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
            (js-eval "document.getElementById('console').scrollTop = document.getElementById('console').scrollHeight;"))))))

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
