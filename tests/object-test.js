import chai  from 'chai';
import mocha from 'mocha';

const { expect } = chai;
const { describe, it } = mocha;

import ObjectExp, {
  assign,
  create,
  defineProperty,
  defineProperties,
  entries,
  freeze,
  getOwnPropertyDescriptor,
  getOwnPropertyDescriptors,
  getOwnPropertyNames,
  getOwnPropertySymbols,
  getPrototypeOf,
  is,
  isExtensible,
  isFrozen,
  isSealed,
  keys,
  preventExtensions,
  seal,
  setPrototypeOf,
  values
} from '../object';

describe('Object', function() {
  it('is the default export', function() {
    expect(ObjectExp).to.equal(global.Object);
  });
  it('has assign', function() {
    expect(assign({name: 'Charles'}, {'developer': true})).to.deep.equal({name: 'Charles', developer: true});
  });
  it('has create', function() {
    expect(Object.create(String.prototype, {})).to.be.instanceOf(String);
  });
  it('has defineProperty', function() {
    expect(defineProperty({}, 'foo', {value: 'bar'}).foo).to.equal('bar');
  });
  it('has defineProperties as a named export', function() {
    expect(defineProperties({}, {foo: {value: 'bar'}}).foo).to.equal('bar');
  });
  it('has entries', function() {
    expect(entries({foo: 'bar'})).to.deep.equal([['foo', 'bar']]);
  });
  it('has freeze', function() {
    expect(function () {
      freeze({}).foo = bar;
    }).to.throw(Error);
  });
  it('has getOwnPropertyDescriptor', function() {
    expect(getOwnPropertyDescriptor({foo: 'bar'}, 'foo').value).to.equal('bar');
  });
  it('has getOwnPropertydescriptors', function() {
    expect(getOwnPropertyDescriptors({foo: 'bar'}).foo.value).to.deep.equal('bar');
  });
  it('has getOwnPropertyNames', function() {
    expect(getOwnPropertyNames({foo: 'bar', baz: 'bang'})).to.deep.equal(['foo', 'baz']);
  });
  it('has getOwnPropertysymbols', function() {
    let symbol = Symbol('symbol');
    expect(getOwnPropertySymbols({[symbol]: 'x'})).to.deep.equal([symbol]);
  });
  it('has getPrototypeOf', function() {
    expect(getPrototypeOf(1)).to.equal(Number.prototype);
  });
  it('has is', function() {
    let object = {};
    expect(is(object, {})).to.equal(false);
    expect(is(object, object)).to.equal(true);
  });
  it('has isExtensible', function() {
    expect(isExtensible({})).to.equal(true);
    expect(isExtensible(freeze({}))).to.equal(false);
  });
  it('has isFrozen', function() {
    expect(isFrozen({})).to.equal(false);
    expect(isFrozen(freeze({}))).to.equal(true);
  });
  it('has isSealed', function() {
    expect(isSealed({})).to.equal(false);
    expect(isSealed(seal({}))).to.equal(true);
  });
  it('has keys', function() {
    expect(keys({foo: 'bar'})).to.deep.equal(['foo']);
  });
  it('has preventExtensions', function() {
    expect(function () {
      preventExtensions({}).foo = 'bar';
    }).to.throw(Error);
  });
  it('has seal', function() {
    expect(function () {
      seal({}).foo = 'bar';
    }).to.throw(Error);
  });
  it('has setPrototypeOf', function() {
    expect(setPrototypeOf({}, null)).to.not.be.instanceOf(Object);
  });
  it('has values', function() {
    expect(values({foo: 'bar'})).to.deep.equal(['bar']);
  });
});
