import { expect } from 'chai';
import toStringTag from '../../../../src/js/underscore/core/toStringTag';

describe('toStringTag', () => {
  describe('when is a object', () => {
    it('should return [object Object]', () => {
      const input = {};
      expect(toStringTag(input)).to.eql('[object Object]');
    });
  });

  describe('when is a array', () => {
    it('should return [object Array]', () => {
      const input = [];
      expect(toStringTag(input)).to.eql('[object Array]');
    });
  });

  describe('when is a function', () => {
    it('should return [object Function]', () => {
      const input = function () { };
      expect(toStringTag(input)).to.eql('[object Function]');
    });
  });

  describe('when is a regexp', () => {
    it('should return [object RegExp]', () => {
      const input = /test/;
      expect(toStringTag(input)).to.eql('[object RegExp]');
    });
  });

  describe('when is a number', () => {
    it('should return [object Number]', () => {
      const input = 1;
      expect(toStringTag(input)).to.eql('[object Number]');
    });
  });

  describe('when is a string', () => {
    it('should return [object String]', () => {
      const input = 'test';
      expect(toStringTag(input)).to.eql('[object String]');
    });
  });

  describe('when is a null', () => {
    it('should return [object Null]', () => {
      const input = null;
      expect(toStringTag(input)).to.eql('[object Null]');
    });
  });

  describe('when is a undefined', () => {
    it('should return [object Undefined]', () => {
      const input = undefined;
      expect(toStringTag(input)).to.eql('[object Undefined]');
    });
  });
});
