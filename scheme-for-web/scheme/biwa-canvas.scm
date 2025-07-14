(define canvas (dom-element "#canvas"))
(define context (js-invoke canvas "getContext" "2d"))

(print "Canvas is 500 x 500. Available functions:
  (line x0 y0 x1 y1) ; draw a line from (x0, y0) to (x1, y1)
  (circle x y r)     ; draw a circle of radius r at (x, y)
Example: (circle 250 100 30)")

(js-invoke context "moveTo" 0 0)
(js-set! context "strokeStyle" "#09f")
(js-set! context "fillStyle" "#037")

(define (line x0 y0 x1 y1)
  ;; draw a line from (x0, y0) to (x1, y1)
  (js-invoke context "moveTo" x0 y0)

  (js-invoke context "lineTo" x1 y1)
  (js-invoke context "stroke"))

(define x-endpoint 10)
(define y-endpoint 500)

(define (next-line)
  (if (> x-endpoint 820)
      (begin
        (clear-timer! line-timer)
        (define reverse-timer (set-timer! next-line-reverse 0.025))))
  (line 0 0 x-endpoint y-endpoint)
  (set! x-endpoint (+ x-endpoint 15)))

(define (next-line-reverse)
  (if (< x-endpoint -900)
      (begin
        (clear-timer! reverse-timer)
        (timer (lambda ()
                 (circle 30 30 20)) 0.5)
        (timer (lambda ()
                 (circle 80 150 50)) 1.0)
        (timer (lambda ()
                 (circle 180 320 90)) 1.5)))
  (line 500 0 x-endpoint y-endpoint)
  (set! x-endpoint (- x-endpoint 15)))

(define (circle x y r)
  ;; draw a circle at (x, y) with radius r
  (js-invoke context "beginPath")
  (js-invoke context "arc" x y r 6.29 #f)
  (js-invoke context "fill")
  (js-invoke context "stroke"))

(define line-timer (set-timer! next-line 0.025))
