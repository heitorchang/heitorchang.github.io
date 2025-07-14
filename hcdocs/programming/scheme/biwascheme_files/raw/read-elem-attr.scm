(onclick ".my-button"
         (clog (square-string (target-attr "data-attr"))))

(onclick "a"
         (let ((new-elem (element-new `("div#top.red main" ,(target-attr "data-id")))))
           (clog new-elem)
           (element-append-child! (getelem "body") new-elem)))

(define (square-string s)
  (let ((int-value (string->number s)))
    (* int-value int-value)))
