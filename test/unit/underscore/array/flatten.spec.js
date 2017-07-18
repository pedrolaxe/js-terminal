import { expect } from 'chai';
import flatten from '../../../../src/js/underscore/array/flatten';

describe('flatten', () => {
  describe('when is a empty array', () => {
    it('should return a empty array', () => {
      expect(flatten([])).to.eql([]);
    });
  });

  describe('when is a linear array', () => {
    it('should return a linear array', () => {
      const result = flatten([1, 2, 3]);
      expect(result).to.eql([1, 2, 3])
    });
  });

  describe('when is a array with one level', () => {
    it('should return a linear array', () => {
      const result = flatten([[1, 2, 3]]);
      expect(result).to.eql([1, 2, 3]);
    });
  });

  describe('when is a array with two levels', () => {
    it('should return a array with one level', () => {
      const result = flatten([[[1, 2, 3]]]);
      expect(result).to.eql([[1, 2, 3]]);
    });
  });
});
