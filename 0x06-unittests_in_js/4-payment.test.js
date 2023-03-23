const chai = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');
const expect = chai.expect;

describe('sendPaymentRequestToApi stub', function () {
  const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
  const log = sinon.spy(console, 'log');
  sendPaymentRequestToApi(100, 20);
  it('checks that sendPaymentRequestToApi uses calculateNumber with a stub', function () {
    expect(stub.calledOnce).to.be.true;
  });

  it('checks that sendPaymentRequestToApi uses calculateNumber with the right values', function () {
    expect(stub.calledWithExactly('SUM', 100, 20)).to.be.true;
  });

  it('checks that sendPaymentRequestToApi logs the right output', function () {
    expect(log.calledOnceWithExactly(`The total is: ${10}`)).to.be.true;
  });

  stub.restore();
  log.restore();
});
