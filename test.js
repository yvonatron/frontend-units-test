import {expect} from 'chai';
import Storage from './';

describe('Storage', () => {

  let storage;

  beforeEach(() => storage = new Storage());

  describe('store()', () => {
    it('can take 2 arguments, storing the 1st as a key and the 2nd as a value', () => {
      storage.store('foo', 'bar');
      storage.store('mung', 'face');

      expect(storage.get('foo')).to.equal('bar');
      expect(storage.get('mung')).to.equal('face');
    });

    it('can take 1 object argument that stores each key/value pair', () => {
      storage.store({
        foo: 'bar',
        mung: 'face'
      });
      expect(storage.get('foo')).to.equal('bar');
      expect(storage.get('mung')).to.equal('face');
    });
  });

  describe('get()', () => {
    beforeEach(() => {
      storage.store({
        frog: 'jump',
        mine: 'yours'
      });
    });

    it('will return all key/values when no arguments are given', () => {
      expect(storage.get()).to.deep.equal({
        frog: 'jump',
        mine: 'yours'
      });
    });

    it('will return just 1 value when a key is supplied', () => {
      expect(storage.get('mine')).to.equal('yours');
    });

    it('will return undefined if an invalid key is given', () => {
      expect(storage.get('unknown')).to.be.undefined;
    });
  });

});
