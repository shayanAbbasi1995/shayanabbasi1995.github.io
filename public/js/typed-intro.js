// Homepage "I'm ..." typewriter.
// Each phrase in data-phrases is added using the matching entry in data-modes
// ("letters" = one character at a time, "words" = one word at a time), held,
// then deleted letter by letter. With data-loop="true" the sequence repeats
// forever; otherwise the last phrase stays on screen.
// Adapted from the typing effect in Saboo24/Portfolio1 (MIT).
(function () {
  var el = document.getElementById('typed');
  if (!el) return;

  var phrases = JSON.parse(el.getAttribute('data-phrases') || '[]');
  var modes = JSON.parse(el.getAttribute('data-modes') || '[]');
  var loop = el.getAttribute('data-loop') === 'true';
  if (!phrases.length) return;

  var TYPE_MS = 70;      // delay per letter while typing
  var WORD_MS = 320;     // delay per word while typing word by word
  var DELETE_MS = 40;    // delay per letter while deleting
  var HOLD_MS = 1600;    // pause once a phrase is complete
  var GAP_MS = 350;      // pause on an empty line before the next phrase

  // Respect users who ask the OS for less motion: show one static phrase
  // (the first when looping, otherwise the final one).
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.textContent = loop ? phrases[0] : phrases[phrases.length - 1];
    return;
  }

  function wait(ms) {
    return new Promise(function (resolve) { setTimeout(resolve, ms); });
  }

  // Builds the intermediate strings for one phrase, e.g.
  // letters: "a", "a ", "a D", ...   words: "a", "a Statistics", ...
  function steps(phrase, mode) {
    var out = [];
    if (mode === 'words') {
      var words = phrase.split(' ');
      for (var w = 1; w <= words.length; w++) out.push(words.slice(0, w).join(' '));
    } else {
      for (var c = 1; c <= phrase.length; c++) out.push(phrase.slice(0, c));
    }
    return out;
  }

  async function type(phrase, mode) {
    var frames = steps(phrase, mode);
    var delay = mode === 'words' ? WORD_MS : TYPE_MS;
    for (var i = 0; i < frames.length; i++) {
      el.textContent = frames[i];
      await wait(delay);
    }
  }

  async function erase() {
    var text = el.textContent;
    while (text.length) {
      text = text.slice(0, -1);
      el.textContent = text;
      await wait(DELETE_MS);
    }
  }

  async function run() {
    el.textContent = '';
    await wait(GAP_MS);
    do {
      for (var i = 0; i < phrases.length; i++) {
        await type(phrases[i], modes[i] || 'letters');
        if (!loop && i === phrases.length - 1) return; // final phrase stays
        await wait(HOLD_MS);
        await erase();
        await wait(GAP_MS);
      }
    } while (loop);
  }

  run();
})();
