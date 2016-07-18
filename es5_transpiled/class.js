'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  var s = new Jeep('Red', 1000000);
  s.fullMsrp = 3;
  console.log(s.msrp); //3
  console.log(s.summary);
  Car.wheels;
};

var Car = function () {
  function Car(color, msrp) {
    _classCallCheck(this, Car);

    //class constructor
    this.name = 'Car';
    this.color = color;
    this.msrp = msrp;
    this.summary = '';
  }

  _createClass(Car, [{
    key: 'summary',
    get: function get() {
      return 'Hi, I am a ' + this.color + ' ' + this.name + ' MSRP ' + this.msrp;
    },
    set: function set(v) {
      this.summary = v;
    }
  }], [{
    key: 'wheels',
    get: function get() {
      return '4';
    }
  }]);

  return Car;
}();

var Jeep = function (_Car) {
  _inherits(Jeep, _Car);

  function Jeep(color, msrp) {
    _classCallCheck(this, Jeep);

    //call the parent method with super

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Jeep).call(this, color, msrp));

    _this.name = 'Jeep'; //supercede the parent
    return _this;
  }

  _createClass(Jeep, [{
    key: 'func',
    value: function func() {
      console.log('func called');
    }
  }, {
    key: 'fullMsrp',
    set: function set(v) {
      this.msrp = v;
    }
  }]);

  return Jeep;
}(Car);

// function Polygon(height, width) { //class constructor
//   this.name = 'Polygon';
//   this.height = height;
//   this.width = width;
// }

// Polygon.prototype = {
//   sayName: function () { //class method
//     console.log('Hi, I am a ' + this.name + '.');
//   }
// };

// function Square(length) { //class constructor
//   Polygon.call(this, length, length);
//   this.name = 'Square';
// }
// // Square inherits from Polygon
// Square.prototype = Object.create(Polygon.prototype);
// // Set the "constructor" property to refer to Square
// Square.prototype.constructor = Square;
// // Add getter
// Square.prototype.getArea = function() { //class method
//   return this.height * this.width;
// };