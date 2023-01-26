export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    // if (typeof brand === 'string') {
    //   this._brand = brand;
    // } else { throw new TypeError('Brand must be a string'); }
    // if (typeof motor === 'string') {
    //     this._motor = motor;
    //   } else { throw new TypeError('Motor must be a string'); }
    // if (typeof color === 'string') {
    //     this._color = color;
    // } else { throw new TypeError('Color must be a string'); }
  }

  cloneCar() {
    return new this.constructor();
  }
}
