(define names
  '("Aardvark"
    "Baboon"
    "Camel"
    "Duck"
    "Elephant"
    "Fox"
    "Giraffe"
    "Hyena"
    "Iguana"
    "Jaguar"
    "Kangaroo"
    "Lion"))

(define content (getelem "#content"))

(element-append-child!
 content
 (element-new
  `(div
    ,@(map (lambda (animal) `(h3 ,animal)) names))))
