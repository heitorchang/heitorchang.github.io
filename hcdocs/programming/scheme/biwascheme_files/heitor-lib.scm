;; convenience functions

(define (input-string id)
  (element-content id))

(define (input-number id)
  (string->number (element-content id)))

(define-macro onclick
  (lambda (id . body)
    `(add-handler! ,id "click"
                   (lambda (event)
                     ,@body))))
