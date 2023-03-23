const chai = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const expect = chai.expect;

describe('sendPaymentRequestToApi', function () {
  it('checks that sendPaymentRequestToApi uses calculateNumber', function () {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(3.2, 456.68);
    expect(spy.calledOnce).to.be.true;
    spy.restore();
  });
});
