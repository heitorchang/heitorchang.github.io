(define nil '())
(define true #t)
(define false #f)
(define (random n)
  (random-integer n))

; https://github.com/biwascheme/biwascheme/issues/110#issuecomment-335869546
(define (date2runtime date)
  ; HACK
  ; wraps around occasionally!
  (+
     (* (date-hour date) 60 60 1000)
     (* (date-minute date) 60 1000)
     (* (date-second date) 1000)
     (date-millisecond date)
  )
)

(define (runtime) (date2runtime (current-date)))

(define (error msg1 msg2) (display msg1) (display " ") (display msg2))
