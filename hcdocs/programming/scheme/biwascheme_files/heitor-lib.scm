;; convenience functions

(define (input-string id)
  (element-content id))

(define (input-number id)
  (string->number (element-content id)))

(define-macro onclick
  (lambda (id . body)
    `(add-handler! ,id "click"
                   (lambda (event)
                     (let* ((elem (getelem ,id))
                            (target (js-ref event "target"))
                            (target-attr (lambda (attr-name) (element-read-attribute target attr-name))))
                       ,@body)))))
