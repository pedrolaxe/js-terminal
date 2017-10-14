import { expect } from 'chai';
import padLeft from '../../../../src/js/underscore/core/padLeft';

describe('padLeft', () => {
  describe('when is a value with less chars then totalWidth', () => {
    it('should return a value padded', () => {
      expect(padLeft('x', 2, 'X')).to.eql('Xx');
    });
  });

  describe('when is a value with same chars then totalWidth', () => {
    it('should return a value', () => {
      expect(padLeft('xx', 2, 'X')).to.eql('xx');
    });
  });

  describe('when is a value with more chars then totalWidth', () => {
    it('should return a value', () => {
      expect(padLeft('xxx', 2, 'X')).to.eql('xxx');
    });
  });

  describe('when paddingChar is ommited', () => {
    it('should return a value padded with zeros', () => {
      expect(padLeft('x', 2)).to.eql('0x');
    });
  });
});
