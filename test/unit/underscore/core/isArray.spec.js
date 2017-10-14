import { expect } from 'chai';
import isArray from '../../../../src/js/underscore/core/isArray';

describe('isArray', () => {
  describe('when is a array', () => {
    it('should return true', () => {
      expect(isArray([])).to.eql(true);
    });
  });

  describe('when is a object', () => {
    it('should return false', () => {
      expect(isArray({})).to.eql(false);
    });
  });

  describe('when is a string', () => {
    it('should return false', () => {
      expect(isArray('')).to.eql(false);
    });
  });

  describe('when is a array-like object', () => {
    it('should return false', () => {
      const input = { 0: 'zero', 1: 'one', length: 2 };
      expect(isArray(input)).to.eql(false);
    });
  });

  describe('when is a object with [[Prototype]] == Array', () => {
    it('should return false', () => {
      const input = Object.setPrototypeOf({}, Array);
      expect(isArray(input)).to.eql(false);
    });
  });
});
