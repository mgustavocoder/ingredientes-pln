const { expect } = require('chai');
const processarIngredientes = require('../index');
const moquecaPeixeInput = require('./mockData/moqueca-de-peixe-input.json');
const moquecaPeixeOutput = require('./mockData/moqueca-de-peixe-output.json');
const batataGratinadaInput = require('./mockData/batata-gratinada-input.json');
const batataGratinadaOutput = require('./mockData/batata-gratinada-output.json');
const medalhaoMignonInput = require('./mockData/medalhao-mignon-input.json');
const medalhaoMignonOutput = require('./mockData/medalhao-mignon-output.json');

describe('Sociable Unit Tests', () => {
  context('Recipes Success Tests', () => {
    it('Moqueca de Peixe test', () => {
      const result = processarIngredientes(moquecaPeixeInput);
      expect(result).to.equal(moquecaPeixeOutput);
    });

    it('Batata Gratinada', () => {
      const result = processarIngredientes(batataGratinadaInput);
      expect(result).to.equal(batataGratinadaOutput);
    });

    it('Medalhao Mignon', () => {
      const result = processarIngredientes(medalhaoMignonInput);
      expect(result).to.equal(medalhaoMignonOutput);
    });
  });

  context('Invalid Inputs Tests', () => {
    it('Given an empty list should return an empty list', () => {
      const result = processarIngredientes([]);
      expect(result).to.deep.equal([]);
    });

    it('Given an undefined input should return an empty list', () => {
      const result = processarIngredientes(undefined);
      expect(result).to.deep.equal([]);
    });

    it('Given a null input should return an empty list', () => {
      const result = processarIngredientes(null);
      expect(result).to.deep.equal([]);
    });
  });
});
