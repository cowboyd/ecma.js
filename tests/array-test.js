import chai  from 'chai';
import mocha from 'mocha';

const { expect } = chai;
const { describe, it } = mocha;

import ArrayExp, {
  from,
  isArray,
  of
} from '../array';

describe('Array', function() {
  it('is the default export', function() {
    expect(ArrayExp).to.equal(global.Array);
  });

  it('has from', function() {
    expect(from("foo")).to.deep.equal(['f','o','o']);
  });
  it('has isArray', function() {
    expect(isArray([])).to.equal(true);
  });
  it('has of', function() {
    expect(of(1,2,3)).to.deep.equal([1,2,3]);
  });
});
