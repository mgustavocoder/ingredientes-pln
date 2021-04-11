module.exports = (listOfNatualLanguageIngredients) => {
  const NBSP_CHAR_CODE = 160;

  return listOfNatualLanguageIngredients.join('#')
    .normalize()
    .split('#')
    .map((line) => line.toLowerCase()
      .replace(/[&/\\#,+()$~%.'":*?<>{}0-9]/g, '')
      .replace(new RegExp(String.fromCharCode(NBSP_CHAR_CODE), 'g'), ' ')
      .trim());
};
