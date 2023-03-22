const chai = require('chai');
const expect = chai.expect;

const calculateNumber = require('./1-calcul');

describe('SUM Numbers', function () {
  it('checks answer for basic', function () {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });
  it('checks answer for basic 0-1', function () {
    expect(calculateNumber('SUM', 0, 3)).to.equal(3);
  });
  it('checks answer for basic 0-2', function () {
    expect(calculateNumber('SUM', 1, 0)).to.equal(1);
  });
  it('checks answer for float down 1', function () {
    expect(calculateNumber('SUM', 1.2, 3)).to.equal(4);
  });
  it('checks answer for float mid 1', function () {
    expect(calculateNumber('SUM', 1.5, 3)).to.equal(5);
  });
  it('checks answer for float up 1', function () {
    expect(calculateNumber('SUM', 1.7, 3)).to.equal(5);
  });
  it('checks answer for float down 2', function () {
    expect(calculateNumber('SUM', 1, 3.2)).to.equal(4);
  });
  it('checks answer for float mid 2', function () {
    expect(calculateNumber('SUM', 1, 3.5)).to.equal(5);
  });
  it('checks answer for float up 2', function () {
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
  });
  it('checks answer for float down 1 2', function () {
    expect(calculateNumber('SUM', 1.2, 3.2)).to.equal(4);
  });
  it('checks answer for float mid 1 2', function () {
    expect(calculateNumber('SUM', 1.5, 3.5)).to.equal(6);
  });
  it('checks answer for float up 1 2', function () {
    expect(calculateNumber('SUM', 1.7, 3.7)).to.equal(6);
  });
});

describe('SUBTRACT Numbers', function () {
  it('checks answer for basic', function () {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
  });
  it('checks answer for basic 0-1', function () {
    expect(calculateNumber('SUBTRACT', 0, 3)).to.equal(-3);
  });
  it('checks answer for basic 0-2', function () {
    expect(calculateNumber('SUBTRACT', 1, 0)).to.equal(1);
  });
  it('checks answer for float down 1', function () {
    expect(calculateNumber('SUBTRACT', 1.2, 3)).to.equal(-2);
  });
  it('checks answer for float mid 1', function () {
    expect(calculateNumber('SUBTRACT', 1.5, 3)).to.equal(-1);
  });
  it('checks answer for float up 1', function () {
    expect(calculateNumber('SUBTRACT', 1.7, 3)).to.equal(-1);
  });
  it('checks answer for float down 2', function () {
    expect(calculateNumber('SUBTRACT', 1, 3.2)).to.equal(-2);
  });
  it('checks answer for float mid 2', function () {
    expect(calculateNumber('SUBTRACT', 1, 3.5)).to.equal(-3);
  });
  it('checks answer for float up 2', function () {
    expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
  });
  it('checks answer for float down 1 2', function () {
    expect(calculateNumber('SUBTRACT', 1.2, 3.2)).to.equal(-2);
  });
  it('checks answer for float mid 1 2', function () {
    expect(calculateNumber('SUBTRACT', 1.5, 3.5)).to.equal(-2);
  });
  it('checks answer for float up 1 2', function () {
    expect(calculateNumber('SUBTRACT', 1.7, 3.7)).to.equal(-2);
  });
});

describe('DIVIDE Numbers', function () {
  it('checks answer for basic', function () {
    expect(calculateNumber('DIVIDE', 1, 2)).to.equal(0.5);
  });
  it('checks answer for basic 0-1', function () {
    expect(calculateNumber('DIVIDE', 0, 3)).to.equal(0);
  });
  it('checks answer for basic 0-2', function () {
    expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
  });
  it('checks answer for float down 1', function () {
    expect(calculateNumber('DIVIDE', 1.2, 2)).to.equal(0.5);
  });
  it('checks answer for float mid 1', function () {
    expect(calculateNumber('DIVIDE', 1.5, 2)).to.equal(1);
  });
  it('checks answer for float up 1', function () {
    expect(calculateNumber('DIVIDE', 1.7, 2)).to.equal(1);
  });
  it('checks answer for float down 2', function () {
    expect(calculateNumber('DIVIDE', 1, 2.2)).to.equal(0.5);
  });
  it('checks answer for float mid 2', function () {
    expect(calculateNumber('DIVIDE', 1, 3.5)).to.equal(0.25);
  });
  it('checks answer for float up 2', function () {
    expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
  });
  it('checks answer for float down 1 2', function () {
    expect(calculateNumber('DIVIDE', 1.2, 2.2)).to.equal(0.5);
  });
  it('checks answer for float mid 1 2', function () {
    expect(calculateNumber('DIVIDE', 1.5, 3.5)).to.equal(0.5);
  });
  it('checks answer for float up 1 2', function () {
    expect(calculateNumber('DIVIDE', 1.7, 3.7)).to.equal(0.5);
  });
});
