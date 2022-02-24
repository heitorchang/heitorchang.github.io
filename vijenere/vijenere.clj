;; Vigenere-100 with special symbols for CR (¢), LF (£), and Space (§)

(def charlist "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~¢£§ªº·")

(defn char->int [c]
  "Converts a char to the corresponding location in charlist."
  (let [index (str/index-of charlist c)]
    (if index
      index
      99))) ; return 99 if index is nil

(defn int->char [n]
  "Retrieve char at position n."
  (nth charlist n))

(defn normalize-index [n]
  "Converts n to a value between 0 and 99 inclusive."
  (if (< n 0)
    (+ n 100)
    (rem n 100)))

(defn str->int-list [s]
  "Converts a string to a list of indices."
  (map char->int s))

(defn repeat-key-for-content [s k]
  "Repeat key k as long as needed to cover or surpass string s"
  (flatten (repeat (+ 1 (quot (count s) (count k))) (str->int-list k))))

(defn sum-lists [a b]
  (map + a b))

(defn subtract-lists [a b]
  (map - a b))

(defn encode-whitespace [s]
  (let [no-spaces (str/replace s #" " "§")
        no-line-feed (str/replace no-spaces #"\n" "£")
        no-carriage-return (str/replace no-line-feed #"\s" "¢")]
    no-carriage-return))

(defn decode-whitespace [s]
  (let [with-spaces (str/replace s #"§" " ")
        with-line-feeds (str/replace with-spaces #"£" "\n")
        with-carriage-returns (str/replace with-line-feeds #"¢" "\n")]
    with-carriage-returns))

(defn my-partition [s n]
  "Partition s into groups of n characters."
  (loop [s s
         i 0
         accum ""]
    (let [first-of-s (first s)
          char-to-add (if (and (> i 1) (= (rem i n) 0))
                        (str " " first-of-s)
                        first-of-s)]
      (if (= 0 (count s))
        accum
        (recur (rest s)
               (+ i 1)
               (str accum char-to-add))))))

(defn encrypt [s k]
  "Converts string s and key s to indices, adds the numeric arrays, and converts back to a string.
Assumes characters in s are all found in charlist."
  (let [whitespace-encoded (encode-whitespace s)
        sum-of-indices (sum-lists (str->int-list whitespace-encoded) (repeat-key-for-content whitespace-encoded k))
        normalized-indices (map normalize-index sum-of-indices)
        list-of-chars (map int->char normalized-indices)
        encrypted (apply str list-of-chars)
        chunked (my-partition encrypted 5)]
    chunked))

(defn decrypt [e k]
  "Decrypt encrypted string e (possibly partitioned) with key k."
  (let [no-spaces (str/replace e #" " "")
        difference-of-indices (subtract-lists (str->int-list no-spaces) (repeat-key-for-content no-spaces k))
        normalized-indices (map normalize-index difference-of-indices)
        list-of-chars (map int->char normalized-indices)
        decrypted (apply str list-of-chars)
        whitespace-decoded (decode-whitespace decrypted)]
    whitespace-decoded))
