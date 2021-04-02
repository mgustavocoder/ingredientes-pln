const natural = require('natural');
const tokenObject = require('../models/tokenObject')

function getListOfObjects(ingredientsList) {
    const result = ingredientsList.map(line => {
        return line.split(' ').map(word => { 
            const radix = natural.PorterStemmerPt.stem(word)
            return tokenObject(radix, word)
        })
    })
    return result.flat()
}

function getListOfRadix(ingredientsList) {
    const result = ingredientsList.map(line => {
        return line.split(' ').map(word => { 
            const radix = natural.PorterStemmerPt.stem(word)
            return radix
        }).join(' ')
    })
    return result
}

module.exports =  {
    getListOfObjects,
    getListOfRadix
}


