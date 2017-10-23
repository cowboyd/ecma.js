import chai  from 'chai';
import mocha from 'mocha';

const { expect } = chai;
const { describe, it } = mocha;

import StringExp from '../string';

describe('String', function() {
  it('is the default export', function() {
    expect(StringExp).to.equal(global.String);
  });
});
