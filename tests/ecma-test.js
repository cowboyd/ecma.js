import chai  from 'chai';
import mocha from 'mocha';

const { expect } = chai;
const { describe, it } = mocha;

import ecma from '../index';

import { Object as ObjectExp, String as StringExp, Array as ArrayExp, Math as MathExp } from '../index';

describe('ecma', function() {
  it('has an object with all the globals as its default export', function() {
    expect(ecma.Object).to.equal(global.Object);
    expect(ecma.Math).to.equal(global.Math);
    expect(ecma.Array).to.equal(global.Array);
  });
  it('has Object as a named export', function() {
    expect(ObjectExp).to.equal(global.Object);
  });
  it('has String as a named export', function() {
    expect(StringExp).to.equal(global.String);
  });
  it('has Array as a named export', function() {
    expect(ArrayExp).to.equal(global.Array);
  });
  it('has Math as a named export', function() {
    expect(MathExp).to.equal(global.Math);
  });
});
