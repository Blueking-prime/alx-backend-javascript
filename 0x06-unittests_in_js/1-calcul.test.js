const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('SUM Numbers', function () {
  it('checks answer for basic', function () {
    assert.equal(4, calculateNumber('SUM', 1, 3));
  });
  it('checks answer for basic 0-1', function () {
    assert.equal(3, calculateNumber('SUM', 0, 3));
  });
  it('checks answer for basic 0-2', function () {
    assert.equal(1, calculateNumber('SUM', 1, 0));
  });
  it('checks answer for float down 1', function () {
    assert.equal(4, calculateNumber('SUM', 1.2, 3));
  });
  it('checks answer for float mid 1', function () {
    assert.equal(5, calculateNumber('SUM', 1.5, 3));
  });
  it('checks answer for float up 1', function () {
    assert.equal(5, calculateNumber('SUM', 1.7, 3));
  });
  it('checks answer for float down 2', function () {
    assert.equal(4, calculateNumber('SUM', 1, 3.2));
  });
  it('checks answer for float mid 2', function () {
    assert.equal(5, calculateNumber('SUM', 1, 3.5));
  });
  it('checks answer for float up 2', function () {
    assert.equal(5, calculateNumber('SUM', 1, 3.7));
  });
  it('checks answer for float down 1 2', function () {
    assert.equal(4, calculateNumber('SUM', 1.2, 3.2));
  });
  it('checks answer for float mid 1 2', function () {
    assert.equal(6, calculateNumber('SUM', 1.5, 3.5));
  });
  it('checks answer for float up 1 2', function () {
    assert.equal(6, calculateNumber('SUM', 1.7, 3.7));
  });
});

describe('SUBTRACT Numbers', function () {
  it('checks answer for basic', function () {
    assert.equal(-2, calculateNumber('SUBTRACT', 1, 3));
  });
  it('checks answer for basic 0-1', function () {
    assert.equal(-3, calculateNumber('SUBTRACT', 0, 3));
  });
  it('checks answer for basic 0-2', function () {
    assert.equal(1, calculateNumber('SUBTRACT', 1, 0));
  });
  it('checks answer for float down 1', function () {
    assert.equal(-2, calculateNumber('SUBTRACT', 1.2, 3));
  });
  it('checks answer for float mid 1', function () {
    assert.equal(-1, calculateNumber('SUBTRACT', 1.5, 3));
  });
  it('checks answer for float up 1', function () {
    assert.equal(-1, calculateNumber('SUBTRACT', 1.7, 3));
  });
  it('checks answer for float down 2', function () {
    assert.equal(-2, calculateNumber('SUBTRACT', 1, 3.2));
  });
  it('checks answer for float mid 2', function () {
    assert.equal(-3, calculateNumber('SUBTRACT', 1, 3.5));
  });
  it('checks answer for float up 2', function () {
    assert.equal(-3, calculateNumber('SUBTRACT', 1, 3.7));
  });
  it('checks answer for float down 1 2', function () {
    assert.equal(-2, calculateNumber('SUBTRACT', 1.2, 3.2));
  });
  it('checks answer for float mid 1 2', function () {
    assert.equal(-2, calculateNumber('SUBTRACT', 1.5, 3.5));
  });
  it('checks answer for float up 1 2', function () {
    assert.equal(-2, calculateNumber('SUBTRACT', 1.7, 3.7));
  });
});

describe('DIVIDE Numbers', function () {
  it('checks answer for basic', function () {
    assert.equal(0.5, calculateNumber('DIVIDE', 1, 2));
  });
  it('checks answer for basic 0-1', function () {
    assert.equal(0, calculateNumber('DIVIDE', 0, 3));
  });
  it('checks answer for basic 0-2', function () {
    assert.equal('Error', calculateNumber('DIVIDE', 1, 0));
  });
  it('checks answer for float down 1', function () {
    assert.equal(0.5, calculateNumber('DIVIDE', 1.2, 2));
  });
  it('checks answer for float mid 1', function () {
    assert.equal(1, calculateNumber('DIVIDE', 1.5, 2));
  });
  it('checks answer for float up 1', function () {
    assert.equal(1, calculateNumber('DIVIDE', 1.7, 2));
  });
  it('checks answer for float down 2', function () {
    assert.equal(0.5, calculateNumber('DIVIDE', 1, 2.2));
  });
  it('checks answer for float mid 2', function () {
    assert.equal(0.25, calculateNumber('DIVIDE', 1, 3.5));
  });
  it('checks answer for float up 2', function () {
    assert.equal(0.25, calculateNumber('DIVIDE', 1, 3.7));
  });
  it('checks answer for float down 1 2', function () {
    assert.equal(0.5, calculateNumber('DIVIDE', 1.2, 2.2));
  });
  it('checks answer for float mid 1 2', function () {
    assert.equal(0.5, calculateNumber('DIVIDE', 1.5, 3.5));
  });
  it('checks answer for float up 1 2', function () {
    assert.equal(0.5, calculateNumber('DIVIDE', 1.7, 3.7));
  });
});
