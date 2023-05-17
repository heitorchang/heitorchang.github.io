(define content (getelem "#content"))
(define return-char #\return)

(define (strip-return-char str)
  (define (iter str accum)
    (cond ((string=? "" str) (apply string (reverse accum)))
          ((char=? (string-ref str 0) return-char)
           (iter (substring str 1 (string-length str)) accum))
          (else
           (iter (substring str 1 (string-length str)) (cons (string-ref str 0) accum)))))
  (iter str '()))

(define (split-lines str)
  (define (iter str line lines)
    (cond ((string=? "" str)
           (cond ((> (length line) 0)
                  (reverse (cons (apply string (reverse line)) lines)))
                 (else
                  (reverse lines))))
          ((char=? #\newline (string-ref str 0))
           (iter (substring str 1 (string-length str)) '() (cons (apply string (reverse line)) lines)))
          (else
           (iter (substring str 1 (string-length str)) (cons (string-ref str 0) line) lines))))
  (iter str '() '()))

;;; CSV parsing
(define (detect-separator csv)
  (let ((common-values '(#\, #\; #\tab))
        (first-char (string-ref csv 0)))
    (cond ((string=? "" csv) #f)
          ((member first-char common-values) first-char)
          (else (detect-separator (substring csv 1 (string-length csv)))))))

(define (parse-line line separator-char)
  (define (parse-line-iter line current-element elements)
    (let ((quote-char #\")
          (in-quotes #f))
      (cond ((string=? "" line)
             (reverse (cons (apply string (reverse current-element)) elements))) ; end of line
            ((char=? quote-char (string-ref line 0))
             (cond ((and (> (string-length line) 1) (char=? (string-ref line 1) quote-char)) ; double quotes
                    (parse-line-iter
                     (substring line 2 (string-length line))
                     (cons quote-char current-element)
                     elements))
                   (else (set! in-quotes (not in-quotes)) ; quoted element
                         (parse-line-iter
                          (substring line 1 (string-length line))
                          current-element
                          elements))))
            ((and (not in-quotes) (char=? separator-char (string-ref line 0))) ; hit separator
             (parse-line-iter
              (substring line 1 (string-length line))
              '()
              (cons (apply string (reverse current-element)) elements)))
            (else ; build current-element
             (parse-line-iter
              (substring line 1 (string-length line))
              (cons (string-ref line 0) current-element)
              elements)))))
  (parse-line-iter line '() '()))

(define (parse-csv csv)
  (let ((separator-char (detect-separator csv)))
    (map (lambda (line) (parse-line line separator-char)) (split-lines (strip-return-char csv)))))

(define (htmlize-list-of-lists list-of-lists)
  (element-new
   `(div ,@(map (lambda (line) `(div ,@(map (lambda (cell) `(div ,cell)) line)))
                list-of-lists))))

(element-append-child! content (htmlize-list-of-lists (parse-csv my-csv)))
