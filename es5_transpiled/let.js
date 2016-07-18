"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function Let() {
    _classCallCheck(this, Let);
  }

  _createClass(Let, null, [{
    key: "ex1",
    value: function ex1() {
      var x = 1;
      if (true) {
        var _x = 2; // different variable in block scope of if
        console.log(_x); // 2
      }
      console.log(x); // 1  
      // var x = 1;
      // if (true) {
      //   var x = 2;  // same variable!
      //   console.log(x);  // 2
      // }
      // console.log(x);  // 2
    }
  }, {
    key: "ex2",
    value: function ex2() {
      var arr = [];

      var _loop = function _loop(i) {
        var el = {};
        el.func = function (ev) {
          return "Element " + i;
        };
        arr.push(el);
      };

      for (var i = 1; i <= 5; i++) {
        _loop(i);
      }

      for (var j = 0; j < arr.length; j++) {
        console.log(arr[j].func());
      }
    }
  }]);

  return Let;
}();

/**
 * Redeclaring the same variable within the same function or block scope raises a SyntaxError.
 */
// let x = 2;
// let x = 3; // raises syntax error