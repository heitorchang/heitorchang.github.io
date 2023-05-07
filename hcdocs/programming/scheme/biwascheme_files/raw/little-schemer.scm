;; initial setup
(define atom?
  (lambda (x)
    (and (not (pair? x)) (not (null? x)))))

(define (add1 x) (+ x 1))
(define (sub1 x) (- x 1))

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

(define member?
  (lambda (a lat)
    (cond
      ((null? lat) #f)
      (else (or (eq? (car lat) a)
                (member? a (cdr lat)))))))

(define rember
  (lambda (a lat)
    (cond
     ((null? lat) '())
     ((eq? (car lat) a) (cdr lat))
     (else (cons (car lat)
                 (rember a (cdr lat)))))))

(define my-firsts
  (lambda (lst)
    (cond
     ((null? lst) '())
     (else (cons (caar lst) (my-firsts (cdr lst)))))))

(define multiinsertR ; accidentally wrote this instead of a single insert
  (lambda (new old lat)
    (cond
     ((null? lat) '())
     (else (cond
            ((eq? (car lat) old) (cons old
                                       (cons new
                                             (insertR-preliminary new old (cdr lat)))))
            (else (cons (car lat) (insertR-preliminary new old (cdr lat)))))))))

(define insertR
  (lambda (new old lat)
    (cond
     ((null? lat) '())
     (else (cond
            ((eq? (car lat) old) (cons old (cons new (cdr lat))))
            (else (cons (car lat) (insertR new old (cdr lat)))))))))

(define insertL
  (lambda (new old lat)
    (cond
     ((null? lat) '())
     (else (cond
            ((eq? (car lat) old) (cons new (cons old (cdr lat))))
            (else (cons (car lat) (insertL new old (cdr lat)))))))))

(define subst
  (lambda (new old lat)
    (cond
     ((null? lat) '())
     (else (cond
            ((eq? (car lat) old) (cons new (cdr lat)))
            (else (cons (car lat) (subst new old (cdr lat)))))))))

(define multirember
  (lambda (a lat)
    (cond
     ((null? lat) '())
     (else
      (cond
       ((eq? (car lat) a) (multirember a (cdr lat)))
       (else (cons (car lat) (multirember a (cdr lat)))))))))

(define multisubst
  (lambda (new old lat)
    (cond
     ((null? lat) '())
     (else (cond ((eq? (car lat) old) (cons new (multisubst new old (cdr lat))))
                 (else (cons (car lat)
                             (multisubst new old (cdr lat)))))))))

(define addtup
  (lambda (tup)
    (cond ((null? tup) 0)
          (else (+ (car tup) (addtup (cdr tup)))))))
