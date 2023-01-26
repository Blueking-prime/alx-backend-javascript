import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else { throw new TypeError('Amount must be a number'); }
    if (currency instanceof Currency) {
      this._currency = currency;
    } else { throw new TypeError('Currency must be an instance of Currency'); }
  }

  set amount(amount) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else { throw new TypeError('Amount must be a number'); }
  }

  get amount() {
    return this._amount;
  }

  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    } else { throw new TypeError('Currency must be an instance of Currency'); }
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') throw new TypeError('Amount must be a number');
    if (typeof conversionRate !== 'number') throw new TypeError('ConversionRate must be a number');

    return amount * conversionRate;
  }
}
