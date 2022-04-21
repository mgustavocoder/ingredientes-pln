const { expect } = require('chai');
const processarIngredientes = require('../index');
const moquecaPeixeInput = require('./mockData/moqueca-de-peixe-input.json');
const moquecaPeixeOutput = require('./mockData/moqueca-de-peixe-output.json');
const batataGratinadaInput = require('./mockData/batata-gratinada-input.json');
const batataGratinadaOutput = require('./mockData/batata-gratinada-output.json');
const medalhaoMignonInput = require('./mockData/medalhao-mignon-input.json');
const medalhaoMignonOutput = require('./mockData/medalhao-mignon-output.json');
const receitaDoReadmeInput = require('./mockData/receita-do-readme-input.json');
const receitaDoReadmeOutput = require('./mockData/receita-do-readme-output.json');

describe('Sociable Unit Tests', () => {
  context('Recipes Success Tests', () => {
    it('Moqueca de Peixe test', () => {
      const result = processarIngredientes(moquecaPeixeInput);
      expect(result).to.deep.equal(moquecaPeixeOutput);
    });

    it('Batata Gratinada', () => {
      const result = processarIngredientes(batataGratinadaInput);
      expect(result).to.deep.equal(batataGratinadaOutput);
    });

    it('Medalhao Mignon', () => {
      const result = processarIngredientes(medalhaoMignonInput);
      expect(result).to.deep.equal(medalhaoMignonOutput);
    });

    it('Receita do Readme', () => {
      const result = processarIngredientes(receitaDoReadmeInput);
      expect(result).to.deep.equal(receitaDoReadmeOutput);
    });

    it('Abacate', () => {
      const result = processarIngredientes('abacate');
      expect(result).to.deep.equal(['abacate']);
    });
  });

  context('Invalid Inputs Tests', () => {
    it('Given an empty list should throws error', () => {
      try {
        processarIngredientes([]);
        expect.fail();
      } catch (error) {
        expect(error.message).to.equal('Invalid Input!');
      }
    });

    it('Given an undefined input should throws error', () => {
      try {
        processarIngredientes(undefined);
        expect.fail();
      } catch (error) {
        expect(error.message).to.equal('Invalid Input!');
      }
    });

    it('Given a null input should throws error', () => {
      try {
        processarIngredientes(null);
        expect.fail();
      } catch (error) {
        expect(error.message).to.equal('Invalid Input!');
      }
    });

    it('Given a number input should throws error', () => {
      try {
        processarIngredientes(null);
        expect.fail();
      } catch (error) {
        expect(error.message).to.equal('Invalid Input!');
      }
    });
  });
});
