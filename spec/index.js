var should = require('chai').should(),
    lamacase = require('../src/index'),
    convert = lamacase.convert;

describe('convert', function() {
  it('converts foo bar into fooBar', function() {
    convert('foo bar').should.equal('fooBar');
  });
});
