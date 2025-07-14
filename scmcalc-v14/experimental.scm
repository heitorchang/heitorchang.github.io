(define (interleave-sep sep args)
  (if (null? args)
      '()
      (cons (car args) (cons sep (interleave-sep sep (cdr args))))))

(define (butlast lst)
  (reverse (cdr (reverse lst))))

(define (print-many . args) (apply print (butlast (interleave-sep ", " args))))
