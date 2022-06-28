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
    // TODO: implement this!
    let words = this.words;
    let markovContainer = {};

    for (let i = 0; i < words.length; i++) {
      let nextWord = words[i+1] || null
      if (markovContainer[words[i]] === undefined) {
        markovContainer[words[i]] = [nextWord];
      } else {
        if (markovContainer[words[i]]) {
          markovContainer[words[i]].push(nextWord);
        }
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
    let markovStory = "" ;
    let word = this.words[0];
    let wordChoices = this.chains[word];
    let nextWord = Math.floor(Math.random() * wordChoices.length)
    
     
  }
}

const catInHatMachine = new MarkovMachine("the cat in the hat");
console.log("words", catInHatMachine.words);
console.log("chains", catInHatMachine.chains);
