import chai  from 'chai';
import mocha from 'mocha';

const { expect } = chai;
const { describe, it } = mocha;

import javascript from '../index';

import { Object as ObjectExp, String as StringExp, Array as ArrayExp, Math as MathExp } from '../index';

describe('javascript', function() {
  it('has an object with all the globals as its default export', function() {
    expect(javascript.Object).to.equal(global.Object);
    expect(javascript.Math).to.equal(global.Math);
    expect(javascript.Array).to.equal(global.Array);
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
