const { expect } = require('chai');
const request = require('request');

describe('Testing API', () => {
  it('Correct status code', function (done) {
    request('http://localhost:7865', 'GET', (err, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it('Correct Response', function (done) {
    request('http://localhost:7865', 'GET', (err, response, body) => {
      expect(body.toString()).to.equal('Welcome to the payment system');
      done();
    });
  });
  it('Correct Response length', function (done) {
    request('http://localhost:7865', 'GET', (err, response, body) => {
      expect(body.toString().length).to.equal(29);
      done();
    });
  });

  it('Correct no endpoint', function (done) {
    request('http://localhost:7865/fake_endpoint', 'GET', (err, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Testing API with query', () => {
  it('Correct status code', function (done) {
    request('http://localhost:7865/cart/14', 'GET', (err, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it('Correct Response', function (done) {
    request('http://localhost:7865/cart/14', 'GET', (err, response, body) => {
      expect(body.toString()).to.equal(`Payment methods for cart ${14}`);
      done();
    });
  });
  it('Correct Response length', function (done) {
    request('http://localhost:7865', 'GET', (err, response, body) => {
      expect(body.toString().length).to.equal(29);
      done();
    });
  });

  it('Correct bad id', function (done) {
    request('http://localhost:7865/cart/', 'GET', (err, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Testing API with object', () => {
  it('Correct status code', function (done) {
    request('http://localhost:7865/available_payments', 'GET', (err, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it('Correct Response', function (done) {
    request('http://localhost:7865/available_payments', 'GET', (err, response, body) => {
      expect(body).to.contain(JSON.stringify({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      }));
      done();
    });
  });
  it('Correct Response length', function (done) {
    request('http://localhost:7865', 'GET', (err, response, body) => {
      expect(body.length).to.equal(29);
      done();
    });
  });
});

describe('Testing API with POST', () => {
  const opt = {
    url: 'http://localhost:7865/login',
    json: true,
    body: {
      userName: 'braap'
    }
  };
  it('Correct status code', function (done) {
    request.post(opt, function (err, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it('Correct Response', function (done) {
    request.post(opt, (err, response, body) => {
      expect(body).to.equal('Welcome braap');
      done();
    });
  });
  it('Correct Response length', function (done) {
    request.post(opt, (err, response, body) => {
      expect(body.length).to.equal(13);
      done();
    });
  });

  it('Correct No username', function (done) {
    const opt = {
      url: 'http://localhost:7865/login',
      json: true
    };

    request.post(opt, (err, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
