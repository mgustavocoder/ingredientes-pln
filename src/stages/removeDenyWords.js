const { getListOfRadix } = require('./stem');

module.exports = (ingredientsList, denyList) => {
  const steamDenyList = getListOfRadix(denyList);
  const cleanList = ingredientsList.filter((ingredient) => {
    const includes = !steamDenyList.includes(ingredient.radix);
    return includes;
  });
  return cleanList;
};
