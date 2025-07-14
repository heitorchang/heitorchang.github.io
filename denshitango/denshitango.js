const version = '0.1.1'
console.log("Version " + version);

const database = new Map();
const categories = new Set();
const deck = new Set();
// todo: save deck in local storage

// array indices
const index_category = 0;
const index_kana = 1;
const index_kanji = 2;
const index_english = 3;
const index_id = 4;

// practice state
let revealedItem = '';
let currentRun = []; // shuffled list of deck cards
let currentId = 103;
let currentKana = '';
let currentKanji = '';
let currentEnglish = '';

function loadWords() {
  words.forEach((word) => {
    database.set(word[index_id], word);
  });
}

function loadCategories() {
  words.forEach((word) => {
    categories.add(word[index_category]);
  });

  const sortedCategories = Array.from(categories).sort();
  const categorySelect = document.getElementById("categorySelect");
  sortedCategories.forEach((category) => {
    const categoryOption = document.createElement('option');
    categoryOption.value = category;
    categoryOption.innerText = category;
    categorySelect.appendChild(categoryOption);
  });
}

function addGivenCategory(category) {
  words.forEach((word) => {
    if (word[index_category] === category) {
      deck.add(word[index_id]);
    }
  });
  showDeck();
  initializeCurrentState();
}

function addCategory() {
  const category = document.getElementById("categorySelect").value;
  addGivenCategory(category);
}

function showDeck() {
  const extractedCategories = new Set();
  deck.forEach((cardId) => {
    extractedCategories.add(database.get(cardId)[index_category]);
  });
  const sortedCategories = Array.from(extractedCategories).sort();
  document.getElementById("deckContentsText").value = sortedCategories.toString();
}

function emptyDeck() {
  deck.clear();
}

function shuffle(array) {
  // A Stack Overflow answer
  let currentIndex = array.length;
  let randomIndex = 0;

  // While there remain elements to shuffle
  while (currentIndex > 0) {
    // Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]
    ];
  }
  return array;
}

function updateReveal() {
  const revealRadios = document.getElementsByName("revealRadio");
  const revealMapping = {
    'revealKana': 'cardKana',
    'revealKanji': 'cardKanji',
    'revealEnglish': 'cardEnglish',
  };

  // hide all
  Object.values(revealMapping).forEach((cardField) => {
    document.getElementById(cardField).classList.add("hidden");
  });
  revealRadios.forEach((radio) => {
    if (radio.checked) {
      document.getElementById(revealMapping[radio.id]).classList.remove("hidden");
      revealedItem = radio.id;
    }
  });
}

function revealField(divId) {
  document.getElementById(divId).classList.remove("hidden");
  if (divId === 'cardKana') {
    playAudio();
  }
}

function initializeCurrentState() {
  currentRun = shuffle(Array.from(deck));
  document.getElementById("cardMessage").innerText = "Afterwards, click on a gray box below to reveal it.";
  document.getElementById("cardKana").innerHTML = "Kana (かな).<br>Clicking here plays audio.";
  document.getElementById("cardKanji").innerHTML = "Kanji (漢字).<br>If a card doesn't have Kanji, it's skipped in 'Show Kanji' mode.";
  document.getElementById("cardEnglish").innerText = "English";
}

function nextCard() {
  document.getElementById("nextCardButton").innerText = "Next card";
  updateReveal();
  currentId = currentRun.pop();
  if (currentId) {
    document.getElementById("cardMessage").innerText = `${currentRun.length} card(s) left.`;
    currentKana = database.get(currentId)[index_kana];
    currentKanji = database.get(currentId)[index_kanji];
    currentEnglish = database.get(currentId)[index_english];

    // update display
    document.getElementById("cardKana").innerText = currentKana;
    document.getElementById("cardKanji").innerText = currentKanji;
    document.getElementById("cardEnglish").innerText = currentEnglish;
    // document.getElementById("cardId").value = currentId;
    // play audio if chose to reveal kana
    if (revealedItem === 'revealKana') {
      playAudio();
    }
    // check if Kanji actually exists
    if (revealedItem === 'revealKanji' && currentKanji === '') {
      nextCard();
    }
  } else {
    document.getElementById("cardMessage").innerText = "Click on Reshuffle below to restart.";
    document.getElementById("cardKana").innerText = "End of deck. Click on Reshuffle below to restart.";
    document.getElementById("cardKanji").innerText = "End of deck. Click on Reshuffle below to restart.";
    document.getElementById("cardEnglish").innerText = "End of deck. Click on Reshuffle below to restart.";
  }
}

function playAudio() {
  const filename = 'audio/' + String(currentId).padStart(4, '0') + '.mp3';
  new Audio(filename).play();
}

function handleGuess() {
  const guess = document.getElementById("guessInput").value;
  // compare to other values

  // if not, update message to try again
}

function init() {
  loadWords();
  loadCategories();
  addGivenCategory("Family");
  addGivenCategory("School");
  initializeCurrentState();
}

init();
