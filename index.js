const normalize = require('./src/stages/normalize')
const tokenize = require('./src/stages/tokenize')
const stem = require('./src/stages/stem')
const removeDenyWords = require('./src/stages/removeDenyWords')
const removeEmptyToken = require('./src/stages/removeEmptyToken')
const removeDuplication = require('./src/stages/removeDuplication')
const adjetives = require('./src/denylist/adjetives')
const stopWords = require('./src/denylist/stopWords')
const packages = require('./src/denylist/packages')
const adverbs = require('./src/denylist/adverbs')
const verbs = require('./src/denylist/verbs')

module.exports = (listOfNaturalLanguageIngredients) => {
    if (isInvalidInput(listOfNaturalLanguageIngredients)) {
        return []
    }

    const nomalizedList = normalize(listOfNaturalLanguageIngredients)
    const tokenList = tokenize(nomalizedList)
    const tokenObjectList = stem.getListOfObjects(tokenList)

    const denyWords = new Array(
        ...adjetives,
        ...stopWords,
         ...packages,
          ...adverbs,
           ...verbs)
    const allowedTokenObjects = removeDenyWords(tokenObjectList, denyWords)
    const notBlankTokenObjects = removeEmptyToken(allowedTokenObjects)
    const resultList = notBlankTokenObjects.map(tokenObject => tokenObject.word)

    return removeDuplication(resultList)
}

function isInvalidInput(listOfNaturalLanguageIngredients) {
    return !listOfNaturalLanguageIngredients ||
    typeof listOfNaturalLanguageIngredients != 'object' ||
    listOfNaturalLanguageIngredients.length <= 0
}

