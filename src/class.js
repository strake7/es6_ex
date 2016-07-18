module.exports = () => {    
    let s = new Jeep('Red', 1000000);    
    s.fullMsrp = 3;
    console.log(s.msrp); //3
    console.log(s.summary);
    Car.wheels 
}

class Car {
  constructor(color, msrp) { //class constructor
    this.name = 'Car';
    this.color = color;
    this.msrp = msrp;
    this.summary = '';
  }
  get summary() { 
    return `Hi, I am a ${this.color} ${this.name} MSRP ${this.msrp}`;
  }
  set summary(v){
      this.summary = v;
  }
  static get wheels(){
      return '4';
  }
}

class Jeep extends Car {
  constructor(color, msrp) {
    super(color, msrp); //call the parent method with super
    this.name = 'Jeep'; //supercede the parent
  }
  func(){
      console.log('func called')
  }
  set fullMsrp(v){
      this.msrp = v;
  }
}



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
