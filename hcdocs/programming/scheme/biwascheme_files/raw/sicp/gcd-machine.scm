;; 5.2

(define gcd-machine
  (make-machine
   '(a b t)
   (list (list 'rem remainder) (list '= =))
   '(test-b
     (test (op =) (reg b) (const 0))
     (branch (label gcd-done))
     (assign t (op rem) (reg a) (reg b))
     (assign a (reg b))
     (assign b (reg t))
     (goto (label test-b))

     gcd-done)))

(set-register-contents! gcd-machine 'a 24826148)
(set-register-contents! gcd-machine 'b 45296490)
(start gcd-machine)
(get-register-contents gcd-machine 'a)  ; 526
