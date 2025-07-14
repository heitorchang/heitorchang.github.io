;; Reading again in 2023 dec.

;; Ten Commandments

;; I. When recurring on a list of atoms, ask (null? lat)
;;    for a number, ask (zero? n) and else
;;    for S-expressions, ask (null? lst), (atom? (car lst)), and else
;; II. Use (cons ...) to build lists
;; III. When building a list, describe the first typical element, and then
;;      cons it onto the natural recursion
;; IV. When recurring, always change at least one argument in a way to make
;;     it closer to termination (cdr -> null?, sub1 -> zero?)
;; V. note: a "thick" + and - are defined, which are typed o+ and o- (p. 60)
;; V. When building a value with o+, use 0 for the terminating line,
;;    because adding 0 does not change the value of an addition. For ox,
;;    use 1 for the terminating line, because multiplying by 1 does not
;;    change the value of a multiplication. With cons, use () for the
;;    terminating line
;; VI. Simplify only after the function is correct
;; VII. Recur on the subparts that are of the same nature (sublists of a list,
;;      subexpressions of an arithmetic expression)
;; VIII. Use helper functions to abstract from representations
;; IX. Abstract common patterns with a new function
;; X. Build functions to collect more than one value at a time

;; The Scheme features used are:
;; car, cdr, cons, eq?, null?, zero?, add1, sub1, number?, and, or, quote,
;; lambda, define, cond

(define atom?
  (lambda (x)
    (and (not (pair? x)) (not (null? x)))))

;; 3 An atom is a string of characters beginning with a letter or special
;; character other than parentheses ().

;; 4 All atoms are S-expressions. All lists are S-expressions.

;; 9 () is the "null list". (quote ()) is also the null list.
;;   Check with (null? lst).

;; 11 eq? checks if its two arguments are the same non-numeric atom.

;; 16
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

;; 33
;; "rember" is "remove a member"

;; Note: this first version has a bug. Elements before 'a' are also removed.
(define rember
  (lambda (a lat)
    (cond
     ((null? lat) (quote ()))
     (else (cond
            ((eq? (car lat) a) (cdr lat))
            (else (rember a
                          (cdr lat))))))))

;; 37
(define rember
  (lambda (a lat)
    (cond
     ((null? lat) (quote ()))
     (else (cond
            ((eq? (car lat) a) (cdr lat))
            (else (cons (car lat)
                        (rember a
                                (cdr lat)))))))))

;; 41 simplified
(define rember
  (lambda (a lat)
    (cond
     ((null? lat) (quote ()))
     ((eq? (car lat) a) (cdr lat))
     (else (cons (car lat)
                 (rember a (cdr lat)))))))

;; Functions like rember can always be simplified in this manner.

;; Why don't we simplify right away?
;; Because then a function's structure does not coincide with its argument's
;; structure. (Simplify after the function is correct.)

;; Note: rember only removes the first occurrence.
;; (rember 'sauce '(soy sauce and tomato sauce)) is '(soy and tomato sauce)

;; 44
(define firsts
  (lambda (l)
    (cond
     ((null? l) (quote ()))
     (else (cons (car (car l)) (firsts (cdr l)))))))

;; (firsts '(((five plums) four) (eleven green oranges) ((no) more)))
;; => ((five plums) eleven (no))

;; Alternatives for visualizing conses (cons 'a (cons 'b (cons 'c '())))
;; => (a b c)
;;
;; I. 1. cons c onto ()
;;    2. cons b onto 1.
;;    3. cons a onto 2.
;;
;; II. 1. cons a onto 2.
;;     2. cons b onto 3.
;;     3. cons c onto ()
;;
;; III. cons a onto
;;        the cons of b onto
;;          the cons of c onto
;;            ()

;; 49 insertR

;; first try
(define insertR
  (lambda (new old lat)
    (cond ((null? lat) (quote ()))
          (else (cond ((eq? (car lat) old)
                       (cons (car lat)
                             (cons new
                                   (insertR new old (cdr lat)))))
                      (else (cons (car lat) (insertR new old (cdr lat)))))))))

;; book's solution
(define insertR
  (lambda (new old lat)
    (cond
     ((null? lat) (quote ()))
     (else (cond
            ((eq? (car lat) old)
             (cons old (cons new (cdr lat))))
            (else (cons (car lat) (insertR new old (cdr lat)))))))))

;; Notes: (car lat) is the same as old
;; since the function only inserts 'new' once, the second cons' argument can be
;; simplified to (cdr lat)

(define insertL
  (lambda (new old lat)
    (cond
     ((null? lat) (quote ()))
     (else (cond
            ((eq? (car lat) old)
             (cons new (cons old (cdr lat))))
            (else (cons (car lat)
                        (insertL new old (cdr lat)))))))))

;; (subst new old lat) replaces the first occurrence of old in the lat with new

(define subst
  (lambda (new old lat)
    (cond
     ((null? lat) (quote ()))
     (else (cond
            ((eq? (car lat) old)
             (cons new (cdr lat)))
            (else (cons (car lat) (subst new old (cdr lat)))))))))

(define subst2
  (lambda (new o1 o2 lat)
    (cond
     ((null? lat) (quote ()))
     (else (cond
            ((or (eq? (car lat) o1) (eq? (car lat) o2))
             (cons new (cdr lat)))
            (else (cons (car lat) (subst2 new o1 o2 (cdr lat)))))))))

;; 53 multirember

(define multirember
  (lambda (a lat)
    (cond ((null? lat) (quote ()))
          ((eq? (car lat) a)
           (multirember a (cdr lat)))
          (else
           (cons (car lat) (multirember a (cdr lat)))))))

;; 56
(define multiinsertR
  (lambda (new old lat)
    (cond ((null? lat) (quote ()))
          ((eq? (car lat) old)
           (cons old (cons new (multiinsertR new old (cdr lat)))))
          (else (cons (car lat) (multiinsertR new old (cdr lat)))))))

(define multiinsertL
  (lambda (new old lat)
    (cond ((null? lat) (quote ()))
          ((eq? (car lat) old)
           (cons new (cons old (multiinsertL new old (cdr lat)))))
          (else (cons (car lat) (multiinsertL new old (cdr lat)))))))

(define multisubst
  (lambda (new old lat)
    (cond ((null? lat) (quote ()))
          ((eq? (car lat) old)
           (cons new (multisubst new old (cdr lat))))
          (else (cons (car lat) (multisubst new old (cdr lat)))))))

;; 59 only nonnegative integers are considered (0, 1, 2, 3, ...)

;; add1 and sub1 are already predefined

;; The thick plus function
(define o+
  (lambda (a b)
    (cond ((zero? a) b)
          (else (o+ (sub1 a) (add1 b))))))

;; book solution, adds 1 as outer function
(define book+
  (lambda (n m)
    (cond ((zero? m) n)
          (else (add1 (o+ n (sub1 m)))))))

;; null? is zero? when working with nonnegative integers. Note that negative
;; numbers would have to be treated differently (sub1 would move them further
;; and further away from 0.

;; cons becomes add1

(define o-
  (lambda (n m)
    (cond ((zero? m) n)
          (else (sub1 (o- n (sub1 m)))))))

;; "tup" is "tuple". () is the empty tuple.

(define addtup
  (lambda (tup)
    (cond ((null? tup) 0)
          (else (o+ (car tup) (addtup (cdr tup)))))))

(define ox
  (lambda (n m)
    (cond ((zero? m) 0)
          (else (o+ n (ox n (sub1 m)))))))

(define tup+
  (lambda (tup1 tup2)
    (cond ((null? tup1) tup2)
          ((null? tup2) tup1)
          ;; no longer needed when accepting different length tups
          ;; ((and (null? tup1) (null? tup2)) (quote ()))
          (else
           (cons (o+ (car tup1) (car tup2)) (tup+ (cdr tup1) (cdr tup2)))))))

(define o>
  (lambda (n m)
    (cond ((zero? n) #f)
          ((zero? m) #t)
          (else (o> (sub1 n) (sub1 m))))))

(define o<
  (lambda (n m)
    (cond ((zero? m) #f)
          ((zero? n) #t)
          (else (o< (sub1 n) (sub1 m))))))

;; Note: treat #f first because n and m can both be 0. This edge case should
;; be false because 0 is not < nor > another 0.

(define o=
  (lambda (n m)
    (cond
     ((zero? m) (zero? n))
     ((zero? n) #f)
     (else (o= (sub1 n) (sub1 m))))))

(define o2=
  (lambda (n m)
    (cond
     ((o> n m) #f)
     ((o< n m) #f)
     (else #t))))

;; 74 like expt
(define pow
  (lambda (n m)
    (cond ((zero? m) 1)
          (else
           (ox n (pow n (sub1 m)))))))

;; 74 quotient (floor division)
(define o-quotient
  (lambda (n m)
    (cond
     ((< n m) 0)
     (else (add1 (o-quotient (o- n m) m))))))

(define o-length
  (lambda (lat)
    (cond
     ((null? lat) 0)
     (else (add1 (o-length (cdr lat)))))))

(define pick
  (lambda (n lat)
    (cond
     ((= n 1) (car lat))
     (else (pick (sub1 n) (cdr lat))))))

(define rempick
  (lambda (n lat)
    (cond
     ((= n 1) (cdr lat))
     (else (cons (car lat) (rempick (sub1 n) (cdr lat)))))))

;; 77
(define no-nums
  (lambda (lat)
    (cond
     ((null? lat) (quote ()))
     ((number? (car lat)) (no-nums (cdr lat)))
     (else
      (cons (car lat) (no-nums (cdr lat)))))))

;; book solution
(define all-nums
  (lambda (lat)
    (cond
     ((null? lat) (quote ()))
     (else
      (cond
       ((number? (car lat))
        (cons (car lat) (all-nums (cdr lat))))
       (else (all-nums (cdr lat))))))))

;; eqan? is true if a1 and a2 are the same atom
(define eqan?
  (lambda (a1 a2)
    (cond
     ((and (number? a1) (number? a2))
      (= a1 a2))
     ((or (number? a1) (number? a2))
      #f)
     (else (eq? a1 a2)))))

(define occur
  (lambda (a lat)
    (cond
     ((null? lat) 0)
     ((eqan? a (car lat)) (add1 (occur a (cdr lat))))
     (else (occur a (cdr lat))))))

(define one?
  (lambda (n)
    (zero? (sub1 n))))

;; 81 rember* is "rember-star".
;; (rember* 'cup '((coffee) cup ((tea) cup) (and (hick)) cup))
;; => ((coffee) ((tea)) (and (hick)))

(define rember*
  (lambda (a l)
    (cond
     ((null? l) (quote ()))
     ((atom? (car l))
      (cond
       ((eq? (car l) a)
        (rember* a (cdr l)))
       (else (cons (car l) (rember* a (cdr l))))))
     (else (cons (rember* a (car l)) (rember* a (cdr l)))))))

;; Example:
;; (((tomato sauce))
;;  ((bean) sauce)
;;  (and ((flying)) sauce))

(define insertR*
  (lambda (new old l)
    (cond
     ((null? l) (quote ()))
     ((atom? (car l))
      (cond
       ((eq? (car l) old)
        (cons old (cons new (insertR* new old (cdr l)))))
       (else
        (cons (car l) (insertR* new old (cdr l))))))
     (else (cons (insertR* new old (car l)) (insertR* new old (cdr l)))))))

;; example
;; (insertR* 'roast 'chuck '((how much (wood)) could ((a (wood) chuck)) (((chuck))) (if (a) ((wood chuck))) could chuck wood))

;; 84-85
;; how many times does a occur in l?
;; (occur* 'banana '((banana) (split ((((banana ice))) (cream (banana)) sherbet)) (banana) (bread) (banana brandy)))

(define occur*
  (lambda (a l)
    (cond
     ((null? l) 0)
     ((atom? (car l))
      (cond
       ((eq? (car l) a) (add1 (occur* a (cdr l))))
       (else (occur* a (cdr l)))))
     (else
      (+ (occur* a (car l)) (occur* a (cdr l)))))))

(define subst*
  (lambda (new old l)
    (cond
     ((null? l) '())
     ((atom? (car l))
      (cond
       ((eq? (car l) old) (cons new (subst* new old (cdr l))))
       (else (cons (car l) (subst* new old (cdr l))))))
     (else
      (cons (subst* new old (car l)) (subst* new old (cdr l)))))))

(define insertL*
  (lambda (new old l)
    (cond
     ((null? l) '())
     ((atom? (car l))
      (cond
       ((eq? (car l) old) (cons new (cons old (insertL* new old (cdr l)))))
       (else (cons (car l) (insertL* new old (cdr l))))))
     (else (cons (insertL* new old (car l)) (insertL* new old (cdr l)))))))

(define member*
  (lambda (a l)
    (cond
     ((null? l) #f)
     ((atom? (car l))
      (cond ((eq? (car l) a) #t)
            (else
             (member* a (cdr l)))))
     (else (or (member* a (car l)) (member* a (cdr l)))))))

;; book solution
(define member*
  (lambda (a l)
    (cond
     ((null? l) #f)
     ((atom? (car l))
      (or (eq? (car l) a)
          (member* a (cdr l))))
     (else (or (member* a (car l)) (member* a (cdr l)))))))

(define leftmost
  (lambda (l)
    (cond
     ((atom? (car l)) (car l))
     (else (leftmost (car l))))))

;; Give an example for x and l where (and (atom? (car l)) (eq? (car l) x))
;; is true.
;; => x: banana
;;    l: (banana split)

;; 89 (and ...) stops as soon as an argument is #f.
;;    (or ...) stops as soon as an argument is #t.

;; 90 eqlist? can have three types of argument:
;; 1. empty
;; 2. an atom as its car
;; 3. a list as its car

;; 3 * 3 gives nine questions to ask in cond

(define eqlist?
  (lambda (l1 l2)
    (cond
     ((and (null? l1) (null? l2)) #t)
     ((and (null? l1) (atom? (car l2))) #f)
     ((null? l1) #f)
     ((and (atom? (car l1)) (null? l2)) #f)
     ((and (atom? (car l1)) (atom? (car l2)))
      (and (eqan? (car l1) (car l2)) (eqlist? (cdr l1) (cdr l2))))
     ((atom? (car l1)) #f)
     ((null? l2) #f)
     ((atom? (car l2)) #f)
     (else
      (and (eqlist? (car l1) (car l2)) (eqlist? (cdr l1) (cdr l2)))))))

(define o-equal?
  (lambda (s1 s2)
    (cond
     ((and (atom? s1) (atom? s2))
      (eqan? s1 s2))
     ((or (atom? s1) (atom? s2)) #f)
     (else (o-eqlist? s1 s2)))))

;; mutually recursive o-equal? and o-eqlist?
(define o-eqlist?
  (lambda (l1 l2)
    (cond
     ((and (null? l1) (null? l2)) #t)
     ((or (null? l1) (null? l2)) #f)
     (else
      (and (o-equal? (car l1) (car l2))
           (o-eqlist? (cdr l1) (cdr l2)))))))

;; Ch. 6 (Shadows) Skipped

;; Ch. 7 (Friends and Relations (Sets)) Skipped

;; 127 (lambda (a l) ...) is a function of two arguments, a and l.
;; (lambda (a)
;;   (lambda (x)
;;     (eq? x a))) is a function that returns the function
;;                 (lambda (x) (eq? x a))

;; This is called currying.

;; eq?-c returns a function that takes x as an argument and tests whether
;; it is eq? to "a".
(define eq?-c
  (lambda (a)
    (lambda (x)
      (eq? x a))))

;; 126
(define rember-f
  (lambda (test? a l)
    (cond
     ((null? l) (quote ()))
     (else (cond
            ((test? (car l) a) (cdr l))
            (else (cons (car l) (rember-f test? a (cdr l)))))))))

(define rember-f
  (lambda (test? a l)
    (cond
     ((null? l) (quote ()))
     ((test? (car l) a) (cdr l))
     (else (cons (car l) (rember-f test? a (cdr l)))))))

(define eq?-c
  (lambda (a)
    (lambda (x)
      (eq? x a))))

;; a function that takes x as an argument and tests whether it is eq? to salad
(define eq?-salad (eq?-c 'salad))

;; 129
(define rember-f
  (lambda (test?)
    (lambda (a l)
      (cond
       ((null? l) (quote ()))
       ((test? (car l) a) (cdr l))
       (else (cons (car l) ((rember-f test?) a (cdr l))))))))

;; 130
(define insertL-f
  (lambda (test?)
    (lambda (new old l)
      (cond
       ((null? l) (quote ()))
       ((test? (car l) old)
        (cons new (cons old (cdr l))))
       (else (cons (car l)
                   ((insertL-f test?) new old (cdr l))))))))

(define insertR-f
  (lambda (test?)
    (lambda (new old l)
      (cond
       ((null? l) (quote ()))
       ((test? (car l) old)
        (cons old (cons new (cdr l))))
       (else (cons (car l)
                   ((insertR-f test?) new old (cdr l))))))))

;; 133
;; You can (rember func-name "your-mind"), meaning you can pass a lambda
;; expression directly instead of creating a temporary helper function

(define insert-g
  (lambda (seq)
    (lambda (new old l)
      (cond
       ((null? l) (quote ()))
       ((eq? (car l) old)
        (seq new old (cdr l)))
       (else (cons (car l)
                   ((insert-g seq) new old (cdr l))))))))

(define subst (insert-g (lambda (new old l) (cons new l))))

;; 133
(define seqrem
  (lambda (new old l)
    l))

(define old-friend-rember
  (lambda (a l)
    ((insert-g seqrem) #f a l)))

;; 137
(define multirember&co
  (lambda (a lat col)
    (cond
     ((null? lat)
      (col (quote ()) (quote ())))
     ((eq? (car lat) a)
      (multirember&co a (cdr lat)
                      (lambda (newlat seen)
                        (col newlat (cons (car lat) seen)))))
     (else
      (multirember&co a (cdr lat)
                      (lambda (newlat seen)
                        (col (cons (car lat) newlat) seen)))))))

(define a-friend
  (lambda (x y)
    (null? y))) ; asks whether the second argument is '() and ignores first arg

;; 138
;; "col" is "collector." Also called a "continuation."

(define new-friend-sketch
  (lambda (newlat seen)
    (col newlat ; col is unbound
         (cons (car lat) seen))))

(define new-friend
  (lambda (newlat seen)
    (a-friend newlat
              (cons (quote tuna) seen))))

(define latest-friend
  (lambda (newlat seen)
    (a-friend (cons (quote and) newlat) seen)))

(define last-friend
  (lambda (x y)
    (length x)))

;; stop 141
