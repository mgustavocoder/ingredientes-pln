const natural = require('natural');
const isEmpty = require('lodash.isempty');
const normalize = require('./src/stages/normalize');
const tokenize = require('./src/stages/tokenize');
const stem = require('./src/stages/stem');
const removeEmptyToken = require('./src/stages/removeEmptyToken');
const removeDuplication = require('./src/stages/removeDuplication');
const tokens = require('./src/allowlist/tokens');

function isInvalidInput(listOfNaturalLanguageIngredients) {
  return !listOfNaturalLanguageIngredients
    || typeof listOfNaturalLanguageIngredients !== 'object'
    || listOfNaturalLanguageIngredients.length <= 0;
}

module.exports = (listOfNaturalLanguageIngredients) => {
  if (isInvalidInput(listOfNaturalLanguageIngredients)) {
    return [];
  }

  const nomalizedList = normalize(listOfNaturalLanguageIngredients);
  const tokenList = tokenize(nomalizedList);
  const tokenObjectList = stem.getListOfObjects(tokenList);

  const notBlankTokenObjects = removeEmptyToken(tokenObjectList);
  let resultList = notBlankTokenObjects.map((tokenObject) => tokenObject.word);

  const nounInflector = new natural.NounInflector();

  resultList = resultList.map((token) => nounInflector.singularize(token));
  const tokensSingularized = tokens.map((token) => nounInflector.singularize(token));

  resultList = resultList.map((token) => {
    if (tokensSingularized.includes(token)) {
      return token;
    }
    return '';
  });

  resultList = resultList.filter((token) => !isEmpty(token));

  return removeDuplication(resultList);
};
