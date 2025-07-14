;; UI functions

(define (answer input-id value)
  (element-set-value! (string-append "#ans_" (number->string input-id)) value)
  value)
