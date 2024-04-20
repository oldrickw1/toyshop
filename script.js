function showAlert() {
    alert('this works');
};

function showText() {
    document.querySelector("#placeholder").innerText = randomTexts[Math.round(Math.random(4)*10)];
}

const randomTexts = [
  "The quick brown fox jumps over the lazy dog.",
  "She sells seashells by the seashore.",
  "How much wood would a woodchuck chuck if a woodchuck could chuck wood?",
  "An apple a day keeps the doctor away.",
  "A watched pot never boils.",
  "Actions speak louder than words.",
  "Beauty is in the eye of the beholder.",
  "Don't cry over spilled milk.",
  "Early to bed and early to rise, makes a man healthy, wealthy, and wise.",
  "Every cloud has a silver lining."
];
