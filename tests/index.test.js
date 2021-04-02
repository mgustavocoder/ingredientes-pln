const { expect } = require('chai')
const processarIngredientes = require('../index')

describe('Sociable Unit Tests', () => {
    context('Recipes Success Tests', () => {
        it("Moqueca de Peixe test", () => {
            const result = processarIngredientes(require('./mockData/moqueca-de-peixe-input.json'))
            expect(result).to.deep.equal(require('./mockData/moqueca-de-peixe-output.json'));
        })

        it("Batata Gratinada", () => {
            const result = processarIngredientes(require('./mockData/batata-gratinada-input.json'))
            expect(result).to.deep.equal(require('./mockData/batata-gratinada-output.json'));
        })

        it("Medalhao Mignon", () => {
            const result = processarIngredientes(require('./mockData/medalhao-mignon-input.json'))
            expect(result).to.deep.equal(require('./mockData/medalhao-mignon-output.json'));
        })
    })

    context('Invalid Inputs Tests', () => {
        it('Given an empty list should return an empty list', () => {
            const result = processarIngredientes([])
            expect(result).to.deep.equal([]);
        })

        it('Given an undefined input should return an empty list', () => {
            const result = processarIngredientes(undefined)
            expect(result).to.deep.equal([]);
        })

        it('Given a null input should return an empty list', () => {
            const result = processarIngredientes(null)
            expect(result).to.deep.equal([]);
        })
    })
})