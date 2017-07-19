import { expect } from 'chai';
import noop from '../../../../src/js/underscore/core/noop';

describe('noop', () => {
  describe('[[Type]]', () => {
    it('should be a function', () => {
      expect(noop).to.be.a('function');
    });
  });

  describe('when is called', () => {
    it('should return undefined', () => {
      expect(noop()).to.eql(undefined);
    });
  });
});
