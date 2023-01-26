export default class Building {
  constructor(sqft) {
    if (typeof sqft === 'number') {
      this._sqft = sqft;
    } else { throw new TypeError('Sqft must be a number'); }
    if (this.constructor !== Building) {
      this.evacuationWarningMessage();
    }
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() { // eslint-disable-line class-methods-use-this
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
