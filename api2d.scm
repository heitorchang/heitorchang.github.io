(define pi 3.141592653589793)

(define js-bg (js-eval "bg"))
(define js-fg (js-eval "fg"))
(define js-rect (js-eval "rect"))
(define js-fill (js-eval "fill"))
(define js-pt (js-eval "pt"))
(define js-line (js-eval "line"))
(define js-circle (js-eval "circle"))

(define bg-color "#fff")
(define fg-color "#000")

(define (bg color)
  (set! bg-color color)
  (js-call js-bg color)
  "no value")

(define (fg color)
  (set! fg-color color)
  (js-call js-fg color)
  "no value")

(define (temp-bg color)
  (js-call js-bg color)
  "no value")

(define (temp-fg color)
  (js-call js-fg color)
  "no value")

;; aliases
(define fill-color bg)
(define stroke-color fg)

(define (rect x y w h)
  (js-call js-rect x y w h)
  "no value")

(define (fill)
  (js-call js-fill)
  "no value")

(define (pt x y)
  (js-call js-pt x y)
  "no value")

(define (line x1 y1 x2 y2)
  (js-call js-line x1 y1 x2 y2)
  "no value")

(define (circle x y r)
  (js-call js-circle x y r)
  "no value")

(define (clear)
  ;; Temporarily set the bg color to white, then restore the previous value
  ;; Exceed canvas edges by 10px
  (temp-bg "#fff")
  (rect -210 -210 420 420)
  (fill)
  (bg bg-color))

(define (axes)
  ;; Temporarily set the fg color to #acc, then restore the previous value
  (temp-fg "#acc")
  (line -200 0 200 0)
  (line 0 -200 0 200)
  (fg fg-color))

(axes)