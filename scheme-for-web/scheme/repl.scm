(define console-elem (getelem "#console"))
(define repl-input-elem (getelem "#replInput"))
(define *history* '())
(define *history-index* 0)

(define (print str)
  (set-content! "#console"
                (string-append (element-content console-elem) str "\n")))

(print "BiwaScheme-Mod 0.7.5 console (press Up and Down to retrieve command history)")

(define (set-input str)
  (js-eval (string-append "document.getElementById('replInput').value = '" str "'")))

(define (repl-run)
  (let ((input-str (element-content repl-input-elem)))
    (set! *history-index* 0)
    (set! *history* (cons input-str *history*))
    (let ((exp-result (eval (read (open-input-string input-str)))))
      (cond ((string? exp-result) (print exp-result))
            ((number? exp-result) (print (number->string exp-result)))
            ((symbol? exp-result) (print (symbol->string exp-result))))
      (set-input "")
      (js-eval "document.getElementById('console').scrollTop = document.getElementById('console').scrollHeight"))))

(add-handler! "#replRun" "click" (lambda (event) (repl-run)))
(add-handler! "#replInput" "keyup"
              (lambda (event)
                (let ((key-code (js-ref event "keyCode")))
                  (cond ((= key-code 13) (repl-run))
                        ((= key-code 38)
                         (begin
                           (set-input (list-ref *history* *history-index*))
                           (set! *history-index* (min (- (length *history*) 1) (+ *history-index* 1)))))
                        ((= key-code 40)
                         (begin
                           (set! *history-index* (max 0 (- *history-index* 1)))
                           (set-input (list-ref *history* *history-index*))))))))
