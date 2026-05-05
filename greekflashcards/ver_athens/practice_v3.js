let words = setuppractice();
const seen = JSON.parse(window.localStorage.getItem('greekflashcards_seen')) || [];
let answeredCorrectly = false;

seen.push('due');
seen.push('tre');

// practice(words, seen, langsvalue);

function replay() {
  // const form = document.getElementById("settings");
  // const langs = form.elements["showlanguage"];
  const langsvalue = "gren"; // langs.value;
  words = setuppractice();
  window.localStorage.setItem("greekflashcards_langsvalue", langsvalue);
  document.getElementById("ui").classList.remove("hidden");

  document.getElementById("guess").value = "";
  answeredCorrectly = false;
  document.getElementById("englishsection").classList.add("white");

  practice(words, seen, langsvalue);
  document.getElementById("guess").focus();
}

function normalize(s) {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function checkguess() {
  if (answeredCorrectly) return;

  const yourguess = document.getElementById("guess").value;

  if (yourguess.trim() === "") return;

  const accepted = document.getElementById("ansholder").innerText.split("/");

  for (let i = 0; i < accepted.length; i++) {
    const ans = accepted[i];
    if (normalize(yourguess).toLowerCase().trim() === normalize(ans).toLowerCase().trim()) {
      console.log("guess is correct");
      document.getElementById("message").innerText = "That's right! Wait one second";
      document.getElementById("englishsection").classList.remove("white");
      document.getElementById("englishsection").classList.add("greenbg");
      answeredCorrectly = true;
      // document.getElementById("revealbutton").disabled = true;
      document.getElementById("nextbutton").disabled = true;
      document.getElementById("revealbutton").disabled = true;
      window.setTimeout(() => {
        document.getElementById("guess").value = "";
        document.getElementById("englishsection").classList.add("white");
        document.getElementById("englishsection").classList.remove("greenbg");
        answeredCorrectly = false;
        document.getElementById("nextbutton").disabled = false;
        document.getElementById("revealbutton").disabled = false;
        // document.getElementById("revealbutton").disabled = false;
        // const form = document.getElementById("settings");
        // const langs = form.elements["showlanguage"];
        const langsvalue = "gren";

        practice(words, seen, langsvalue);
        document.getElementById("message").innerHTML = "&nbsp;";
      }, 1500);
      break;
    }
  }
}

function reveal() {
  document.getElementById("englishsection").classList.remove("white");
  document.getElementById("englishsection").classList.add("yellowbg");
  document.getElementById("message").innerText = "Press Next to continue";
  // document.getElementById("revealbutton").disabled = true;
  answeredCorrectly = true;
}

function next() {
  // window.setTimeout(() => {
  document.getElementById("guess").value = "";
  answeredCorrectly = false;
  document.getElementById("englishsection").classList.add("white");
  document.getElementById("englishsection").classList.remove("yellowbg");
  // const form = document.getElementById("settings");
  // const langs = form.elements["showlanguage"];
  const langsvalue = "gren";

  practice(words, seen, langsvalue);
  document.getElementById("message").innerHTML = "&nbsp;";
  // document.getElementById("revealbutton").disabled = false;
  document.getElementById("guess").focus();
  // }, 3000);
}
