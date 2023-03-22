const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('checks answer for basic', function () {
    assert.equal(4, calculateNumber(1, 3));
  });
  it('checks answer for basic 0-1', function () {
    assert.equal(3, calculateNumber(0, 3));
  });
  it('checks answer for basic 0-2', function () {
    assert.equal(1, calculateNumber(1, 0));
  });
  it('checks answer for float down 1', function () {
    assert.equal(4, calculateNumber(1.2, 3));
  });
  it('checks answer for float mid 1', function () {
    assert.equal(5, calculateNumber(1.5, 3));
  });
  it('checks answer for float up 1', function () {
    assert.equal(5, calculateNumber(1.7, 3));
  });
  it('checks answer for float down 2', function () {
    assert.equal(4, calculateNumber(1, 3.2));
  });
  it('checks answer for float mid 2', function () {
    assert.equal(5, calculateNumber(1, 3.5));
  });
  it('checks answer for float up 2', function () {
    assert.equal(5, calculateNumber(1, 3.7));
  });
  it('checks answer for float down 1 2', function () {
    assert.equal(4, calculateNumber(1.2, 3.2));
  });
  it('checks answer for float mid 1 2', function () {
    assert.equal(6, calculateNumber(1.5, 3.5));
  });
  it('checks answer for float up 1 2', function () {
    assert.equal(6, calculateNumber(1.7, 3.7));
  });
});
