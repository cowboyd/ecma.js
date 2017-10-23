import chai  from 'chai';
import mocha from 'mocha';

const { expect } = chai;
const { describe, it } = mocha;

import NumberExp, {
  EPSILON,
  MAX_SAFE_INTEGER,
  MAX_VALUE,
  MIN_SAFE_INTEGER,
  MIN_VALUE,
  NaN,
  NEGATIVE_INFINITY,
  POSITIVE_INFINITY,
  isNaN,
  isFinite,
  isInteger,
  isSafeInteger,
  parseFloat,
  parseInt
}  from '../number';

describe('Number', function() {
  it('is the default export', function() {
    expect(NumberExp).to.equal(global.Number);
  });
  it('has number constants', function() {
    expect(EPSILON).not.to.be.undefined;
    expect(MAX_SAFE_INTEGER).not.to.be.undefined;
    expect(MAX_VALUE).not.to.be.undefined;
    expect(MIN_SAFE_INTEGER).not.to.be.undefined;
    expect(MIN_VALUE).not.to.be.undefined;
    expect(NaN).not.to.be.undefined;
    expect(NEGATIVE_INFINITY).not.to.be.undefined;
    expect(POSITIVE_INFINITY).not.to.be.undefined;
    expect(EPSILON).not.to.be.undefined;
    expect(EPSILON).not.to.be.undefined;
    expect(EPSILON).not.to.be.undefined;
  });
  it('has isNaN', function() {
    expect(isNaN(Number.NaN)).to.equal(true);
    expect(isNaN(5)).to.equal(false);
  });
  it('has isFinite', function() {
    expect(isFinite(5)).to.equal(true);
    expect(isFinite(Number.POSITIVE_INFINITY)).to.equal(false);
  });
  it('has isInteger', function() {
    expect(isInteger(5)).to.equal(true);
    expect(isInteger(5.5)).to.equal(false);
  });
  it('has isSafeInteger', function() {
    expect(isSafeInteger(5)).to.equal(true);
    expect(isSafeInteger(Math.pow(2, 53))).to.equal(false);
  });
  it('has parseFloat', function() {
    expect(parseFloat('1.1')).to.equal(1.1);
  });
  it('has parseInt', function() {
    expect(parseInt('5')).to.equal(5);
  });
});
