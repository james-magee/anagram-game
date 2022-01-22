
/**
 * 
 * @param {String} anagram
 * @param {Set} dictionary
 */

const solveAnagram = (anagram, dictionary) => {
  const letters = {};
  anagram.split('').forEach((letter) => {
    if (letters.hasOwnProperty(letter)) {
      letters[letter] += 1
    } else {
      letters[letter] = 1
    };
  });
  const words = [];

  /**
   * 
   * @param {Set} remainingLetters
   * @param {String} string
   */
  const solve = (remainingLetters, string) => {
    // console.log(typeof remainingLetters)
    if (dictionary.has(string)) {
      words.push(string);
    }
    Object.keys(remainingLetters).forEach((letter) => {
      const duplicate = new Object(remainingLetters);
      duplicate[letter] -= 1
      if (duplicate[letter] <= 0) {
        delete duplicate[letter];
      }
      solve(duplicate, string + letter);
    });
  }

  solve(letters, '');

  return words;
};

