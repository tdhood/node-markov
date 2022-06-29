"use strict";

/** Textual markov chain generator. */

class MarkovMachine {
  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/);
    this.chains = this.getChains();
  }

  /** Get markov chain: returns Map of Markov chains.
   *
   *  For text of "The cat in the hat.", chains will be:
   *
   *  {
   *   "The": ["cat"],
   *   "cat": ["in"],
   *   "in": ["the"],
   *   "the": ["hat."],
   *   "hat.": [null],
   *  }
   *
   * */

  getChains() {
    const words = this.words;
    let markovContainer = new Map();


    for (let i = 0; i < words.length; i++) {
      const nextWord = words[i + 1] || null;
      if (!markovContainer.has(words[i])) {
        markovContainer.set(words[i], [nextWord]);
      } else {
        markovContainer.get(words[i]).push(nextWord);
      }
    }

    return markovContainer;
  }

  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {
    // TODO: implement this!
    // - start at the first word in the input text
    // - find a random word from the following-words of that
    // - repeat until reaching the terminal null
    let word = this.words[0];
    let markovStory = [word];
    function findNextWord(choices) {
      return choices[Math.floor(Math.random() * choices.length)];
    }

    while (word !== null) {
      const wordChoices = this.chains.get(word);
      word = findNextWord(wordChoices);
      markovStory.push(word);
    }
    return markovStory.join(" ");

  }
}

//order of loop, doing things twice in set up and loop

let content = `The constructor you function. The contains some code The.
              to get The you started you some input text The. to get The you
              started you some input text`;
const catInHatMachine = new MarkovMachine(content);
console.log("words", catInHatMachine.words);
console.log("chains", catInHatMachine.chains);
console.log("story=", catInHatMachine.getText());
