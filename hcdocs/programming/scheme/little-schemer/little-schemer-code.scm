;;; lat: is it a 'list of atoms'? (p. 16)
(define lat?
  (lambda (lst)
    (cond
     ((null? lst) #t)
     ((atom? (car lst)) (lat? (cdr lst)))
     (else #f))))

;;; is 'a' a member of 'lat'? (p. 22)
(define member?
  (lambda (a lat)
    (cond
     ((null? lat) #f)
     (else (or (eq? (car lat) a)
               (member? a (cdr lat)))))))

;;; note: (eq? '(a) '(a)) => #f

;;; rember: remove a member (only the first one) (p. 41)
;;; note: definition in p. 34 is flawed
;;; note: definition in p. 37 can be simplified
(define rember
  (lambda (a lat)
    (cond
     ((null? lat) '())
     ((eq? (car lat) a) (cdr lat))
     (else (cons (car lat)
                 (rember a (cdr lat)))))))

;;; (firsts lst) builds a list of the first items of each sublist in 'lst'
(define firsts
  (lambda (lst)
    (cond
     ((null? lst) '())
     (else (cons (caar lst) (firsts (cdr lst)))))))

;;; (insertR new old lat) inserts 'new' to the right of the first 'old' (p. 50)
(define insertR
  (lambda (new old lat)
    (cond
     ((null? lat) '())
     ((eq? (car lat) old) (cons old (cons new (cdr lat))))
     (else (cons (car lat) (insertR new old (cdr lat)))))))

;;; insertL (p. 51)
(define insertL
  (lambda (new old lat)
    (cond
     ((null? lat) '())
     ((eq? (car lat) old) (cons new (cons old (cdr lat))))
     (else (cons (car lat) (insertL new old (cdr lat)))))))

;;; (subst new old lat) replaces the first 'old' with 'new' (p. 51)
(define subst
  (lambda (new old lat)
    (cond
     ((null? lat) '())
     (else (cond
            ((eq? (car lat) old)
             (cons new (cdr lat)))
            (else (cons (car lat)
                        (subst new old (cdr lat)))))))))

;;; (subst2 new o1 o2 lat) replaces either the first 'o1' or 'o2' with 'new'
(define subst2
  (lambda (new o1 o2 lat)
    (cond
     ((null? lat) '())
     (else (cond
            ((or (eq? (car lat) o1) (eq? (car lat) o2))
             (cons new (cdr lat)))
            (else (cons (car lat) (subst2 new o1 o2 (cdr lat)))))))))

;;; multirember (p. 53)
(define multirember
  (lambda (a lat)
    (cond
     ((null? lat) '())
     ((eq? (car lat) a)
      (multirember a (cdr lat)))
     (else
      (cons (car lat) (multirember a (cdr lat)))))))

;;; multiinsertR (p. 56)
(define multiinsertR
  (lambda (new old lat)
    (cond
     ((null? lat) '())
     (else
      (cond
       ((eq? (car lat) old)
        (cons old (cons new (multiinsertR new old (cdr lat)))))
       (else
        (cons (car lat) (multiinsertR new old (cdr lat)))))))))

;;; multiinsertL (p. 57)
(define multiinsertL
  (lambda (new old lat)
    (cond
     ((null? lat) '())
     (else
      (cond
       ((eq? (car lat) old)
        (cons new (cons old (multiinsertL new old (cdr lat)))))
       (else
        (cons (car lat) (multiinsertL new old (cdr lat)))))))))

;;; multisubst (p. 57)
(define multisubst
  (lambda (new old lat)
    (cond
     ((null? lat) '())
     (else (cond
            ((eq? (car lat) old)
             (cons new (multisubst new old (cdr lat))))
            (else
             (cons (car lat) (multisubst new old (cdr lat)))))))))

;;; numbers (p. 59)
(define add1
  (lambda (n)
    (+ n 1)))

(define sub1
  (lambda (n)
    (- n 1)))

;;; write the special symbol for addition as o+ (p. 60)
(define o+
  (lambda (n m)
    (cond
     ((zero? m) n)
     (else (add1 (o+ n (sub1 m)))))))

;;; subtraction with o- (p. 61)
(define o-
  (lambda (n m)
    (cond
     ((zero? m) n)
     (else (sub1 (o- n (sub1 m)))))))

;;; a tup is a tuple, a list of numbers (p. 61)
;;; () is a tup, a list of zero numbers

;;; add the numbers in a tup (p. 64)
(define addtup
  (lambda (tup)
    (cond
     ((null? tup) 0)
     (else (+ (car tup) (addtup (cdr tup)))))))

;;; multiplication (p. 65)
(define o*
  (lambda (n m)
    (cond
     ((zero? m) 0)
     (else
      (+ n (o* n (sub1 m)))))))

;;; (tup+ tup1 tup2) adds the first number of tup1 to the first number of tup2,
;;; then the second number of tup1 to that of tup2, and so on. (p. 68)
