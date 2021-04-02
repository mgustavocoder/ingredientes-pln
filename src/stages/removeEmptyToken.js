const isEmpty = require('lodash.isempty')

module.exports = (resultList) => {
    resultList = resultList.filter(i => !isEmpty(i.word))
    return resultList
}
