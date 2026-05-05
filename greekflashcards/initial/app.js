const defaultwords = [
  ['ναι', 'yes'],
  ['όχι', 'no'],
  ['πού είναι', 'where is'],
  ['παρακαλώ', 'please'],
  ['ευχαριστώ', 'thank you']
];

function populateTable() {
  const tableelem = document.getElementById("tableelem");
  const words = defaultwords;

  for (let i = 0; i < words.length; i++) {
    const newrow = document.createElement("tr");
    const greektd = document.createElement("td");
    greektd.classList.add("greektd");
    const greek = document.createTextNode(words[i][0]);

    const englishtd = document.createElement("td");
    englishtd.classList.add("englishtd");
    const english = document.createTextNode(words[i][1]);

    greektd.appendChild(greek);
    englishtd.appendChild(english);
    newrow.appendChild(greektd);
    newrow.appendChild(englishtd);
    tableelem.appendChild(newrow);
  }
}

function shuffle(array) {
  // from Stack Overflow

  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

function practice(wordsleft, seen, langsvalue) {
  console.log("using langsvalue " + langsvalue);
  console.log("wordsleft " + wordsleft.length);
  if (wordsleft.length === 0) {
    console.log("All words shown");
    showend();
  } else {
    const word = wordsleft.pop();
    if (seen.indexOf(word[0]) >= 0) {
      console.log("word was seen: " + word);
      practice(wordsleft, seen, langsvalue);
    } else {
      console.log("processing word " + word);
      if (langsvalue === "gren") {
        document.getElementById("greeksection").innerText = word[0];
        document.getElementById("englishsection").innerText = word[1];
        document.getElementById("ansholder").innerText = word[1];
      } else {
        document.getElementById("greeksection").innerText = word[1];
        document.getElementById("englishsection").innerText = word[0];
        document.getElementById("ansholder").innerText = word[0];
      }
    }
  }
}

function setuppractice() {
  const form = document.getElementById("settings");
  const langs = form.elements["showlanguage"];
  const langsvalue = langs.value;
  window.localStorage.setItem("greekflashcards_langsvalue", langsvalue);

  return generatewordlist();
}

function generatewordlist() {
  const allwords = JSON.parse(JSON.stringify(defaultwords));
  shuffle(allwords);

  return allwords;
}

function showend() {
  console.log("show end");
  document.getElementById("greeksection").innerText = "Choose a direction to replay";
  document.getElementById("englishsection").innerHTML = "&nbsp;";
  document.getElementById("ui").classList.add("hidden");

  document.getElementById("grenid").checked = false;
  document.getElementById("engrid").checked = false;
}
