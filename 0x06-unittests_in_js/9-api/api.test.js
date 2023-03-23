const { expect } = require('chai');
const request = require('request');

describe('Testing API', () => {
  it('Correct status code', function (done) {
    request('http://localhost:7865', 'GET', (err, response, body) => {
      expect(response.statusCode).to.equal(200);
    });
    done();
  });
  it('Correct Response', function (done) {
    request('http://localhost:7865', 'GET', (err, response, body) => {
      expect(body.toString()).to.equal('Welcome to the payment system');
    });
    done();
  });
  it('Correct Response length', function (done) {
    request('http://localhost:7865', 'GET', (err, response, body) => {
      expect(body.toString().length).to.equal(29);
    });
    done();
  });

  it('Correct no endpoint', function (done) {
    request('http://localhost:7865/fake_endpoint', 'GET', (err, response, body) => {
      expect(response.statusCode).to.equal(404);
    });
    done();
  });
});

describe('Testing API with query', () => {
  it('Correct status code', function (done) {
    request('http://localhost:7865/cart/14', 'GET', (err, response, body) => {
      expect(response.statusCode).to.equal(200);
    });
    done();
  });
  it('Correct Response', function (done) {
    request('http://localhost:7865/cart/14', 'GET', (err, response, body) => {
      expect(body.toString()).to.equal(`Payment methods for cart ${14}`);
    });
    done();
  });
  it('Correct Response length', function (done) {
    request('http://localhost:7865', 'GET', (err, response, body) => {
      expect(body.toString().length).to.equal(29);
    });
    done();
  });

  it('Correct bad id', function (done) {
    request('http://localhost:7865/cart/', 'GET', (err, response, body) => {
      expect(response.statusCode).to.equal(404);
    });
    done();
  });
});
