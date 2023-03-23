const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('checks that getPaymentTokenFromAPI works properly', function (done) {
    getPaymentTokenFromAPI(true)
      .then((data) => {
        expect(data).to.contain({
          data: 'Successful response from the API'
        });
      });
    done();
  });
  it('checks that getPaymentTokenFromAPI works properly', function (done) {
    expect(getPaymentTokenFromAPI('braap')).to.be.undefined;
    done();
  });
});
