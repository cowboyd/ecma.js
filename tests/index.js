// https://github.com/standard-things/esm#getting-started
require('mocha');
require('chai');
require = require("@std/esm")(module, { esm: 'js' });
require('./ecma-test');
require('./object-test');
require('./math-test');
require('./array-test');
require('./string-test');
require('./number-test');
