;; p. 4
(define (count-sexps l)
  (cond
   ((null? l) 0)
   (else (+ 1 (count-sexps (cdr l))))))

(define lat?
  (lambda (l)
    (cond
     ((null? l) #t)
     ((atom? (car l)) (lat? (cdr l)))
     (else #f))))
