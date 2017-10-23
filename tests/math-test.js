import chai  from 'chai';
import mocha from 'mocha';

const { expect } = chai;
const { describe, it } = mocha;

import MathExp, {
  E,
  LN2,
  LN10,
  LOG2E,
  LOG10E,
  PI,
  SQRT1_2,
  SQRT2,
  abs,
  acos,
  acosh,
  asin,
  asinh,
  atan,
  atanh,
  atan2,
  cbrt,
  ceil,
  clz32,
  cos,
  cosh,
  exp,
  expm1,
  floor,
  fround,
  hypot,
  imul,
  log,
  log1p,
  log10,
  log2,
  max,
  min,
  pow,
  random,
  round,
  sign,
  sin,
  sinh,
  sqrt,
  tan,
  tanh,
  trunc
} from '../math';

describe('Math', function() {
  it('is the default export', function() {
    expect(MathExp).to.equal(global.Math);
  });
  it('has all of the mathematical constants', function() {
    expect(E).not.to.be.undefined;
    expect(LN2).not.to.be.undefined;
    expect(LN10).not.to.be.undefined;
    expect(LOG2E).not.to.be.undefined;
    expect(LOG10E).not.to.be.undefined;
    expect(PI).not.to.be.undefined;
    expect(SQRT1_2).not.to.be.undefined;
    expect(SQRT2).not.to.be.undefined;
  });
  it('has all of the mathematical functions', function() {
    expect(abs).to.be.instanceOf(Function);
    expect(acos).to.be.instanceOf(Function);
    expect(acosh).to.be.instanceOf(Function);
    expect(asin).to.be.instanceOf(Function);
    expect(asinh).to.be.instanceOf(Function);
    expect(atan).to.be.instanceOf(Function);
    expect(atanh).to.be.instanceOf(Function);
    expect(atan2).to.be.instanceOf(Function);
    expect(cbrt).to.be.instanceOf(Function);
    expect(ceil).to.be.instanceOf(Function);
    expect(clz32).to.be.instanceOf(Function);
    expect(cos).to.be.instanceOf(Function);
    expect(cosh).to.be.instanceOf(Function);
    expect(exp).to.be.instanceOf(Function);
    expect(expm1).to.be.instanceOf(Function);
    expect(floor).to.be.instanceOf(Function);
    expect(fround).to.be.instanceOf(Function);
    expect(hypot).to.be.instanceOf(Function);
    expect(imul).to.be.instanceOf(Function);
    expect(log).to.be.instanceOf(Function);
    expect(log1p).to.be.instanceOf(Function);
    expect(log2).to.be.instanceOf(Function);
    expect(max).to.be.instanceOf(Function);
    expect(min).to.be.instanceOf(Function);
    expect(pow).to.be.instanceOf(Function);
    expect(random).to.be.instanceOf(Function);
    expect(round).to.be.instanceOf(Function);
    expect(sign).to.be.instanceOf(Function);
    expect(sin).to.be.instanceOf(Function);
    expect(sinh).to.be.instanceOf(Function);
    expect(sqrt).to.be.instanceOf(Function);
    expect(tan).to.be.instanceOf(Function);
    expect(tanh).to.be.instanceOf(Function);
    expect(trunc).to.be.instanceOf(Function);
  });
});
