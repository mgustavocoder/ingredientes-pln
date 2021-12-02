const natural = require('natural');
const tokenObject = require('../models/tokenObject');

function getListOfObjects(ingredientsList) {
  const result = ingredientsList.map((line) => line.split(' ').map((word) => {
    const radix = natural.PorterStemmerPt.stem(word);
    return tokenObject(radix, word);
  }));
  return result.flat();
}

module.exports = {
  getListOfObjects,
};
