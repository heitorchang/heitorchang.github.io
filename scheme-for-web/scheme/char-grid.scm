(print "Hello, world!")
(print (current-date))
(console-log "ok.")

(define (print-cell r c)
  (print "<div class=\"cell\" id=\"" r "-" c "\"></div>"))

(define (setup-divs r c)
  (for-each (lambda (row)
              (print "<div class=\"row\">")
              (for-each (lambda (col) (print-cell row col)) (iota r))
              (print "</div>"))
            (iota c)))

;; manipulate grid
(define (set-char r c v)
  (set-content! (getelem (string-append "#" r "-" c)) v))

(define counter 10)
(define message "Hello")
(define (draw col m)
  (let ((char-index 0))
    (string-for-each (lambda (char)
                       (set-char "1" (number->string (+ col char-index)) (string char))
                       (set! char-index (+ 1 char-index)))
                     m)))
(define (redraw)
  (draw counter "     ")
  (set! counter (- counter 1))
  (draw counter message))

(define my-timer
  (set-timer! redraw 0.25))
