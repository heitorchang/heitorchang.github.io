(define counter 0)
(define (g)
  (print "hello g23")
(print counter)
(set! counter (+ 1 counter)))

(define (f x)
(+ x 1))

(f 90)
