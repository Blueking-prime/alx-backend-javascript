const chai = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const expect = chai.expect;

describe('sendPaymentRequestToApi stub', function () {
  beforeEach(() => { sinon.spy(console, 'log'); });
  afterEach(() => { console.log.restore(); });
  it('checks that sendPaymentRequestToApi logs the right output', function () {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.calledOnceWithExactly(`The total is: ${120}`)).to.be.true;
  });
  it('checks that sendPaymentRequestToApi logs the right output', function () {
    sendPaymentRequestToApi(10, 10);
    expect(console.log.calledOnceWithExactly(`The total is: ${20}`)).to.be.true;
  });
});
