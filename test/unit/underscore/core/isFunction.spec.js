import { expect } from 'chai';
import isFunction from '../../../../src/js/underscore/core/isFunction';

describe('isFunction', () => {
  describe('when is a function expression', () => {
    it('should return true', () => {
      const input = function () { };
      expect(isFunction(input)).to.eql(true);
    });
  });

  describe('when is a named function expression', () => {
    it('should return true', () => {
      const input = function input() { };
      expect(isFunction(input)).to.eql(true);
    });
  });

  describe('when is a declaration function', () => {
    it('should return true', () => {
      function input() { }
      expect(isFunction(input)).to.eql(true);
    });
  });

  describe('when is a arrow function', () => {
    it('should return true', () => {
      const input = () => {};
      expect(isFunction(input)).to.eql(true);
    });
  });

  describe('when is a object', () => {
    it('should return false', () => {
      expect(isFunction({})).to.eql(false);
    });
  });

  describe('when is a object with [[Prototype]] == Function', () => {
    it('should return false', () => {
      const input = Object.setPrototypeOf({}, Function);
      expect(isFunction(input)).to.eql(false);
    });
  });

  describe('when is a regexp', () => {
    it('should return false', () => {
      expect(isFunction(/test/)).to.eql(false);
    });
  });
});
