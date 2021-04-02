module.exports = (listOfNatualLanguageIngredients) => {
    const NBSP_CHAR_CODE = 160

    return listOfNatualLanguageIngredients.join('#')
                                   .normalize()
                                   .split('#')
                                   .map(line => {
                                    line = line.toLowerCase()
                                    line = line.replace(/[&\/\\#,+()$~%.'":*?<>{}0-9]/g, '')
                                    line = line.replace(new RegExp(String.fromCharCode(NBSP_CHAR_CODE), 'g'), ' ')
                                    line = line.trim()
                                    return line
                                })
}