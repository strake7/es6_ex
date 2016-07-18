module.exports = class Let {
  static ex1() {
    let x = 1;
    if (true) {
      let x = 2;  // different variable in block scope of if
      console.log(x);  // 2
    }
    console.log(x);  // 1  
    // var x = 1;
    // if (true) {
    //   var x = 2;  // same variable!
    //   console.log(x);  // 2
    // }
    // console.log(x);  // 2
  }
  static ex2() {
    var arr = [];

    for (let i = 1; i <= 5; i++) {
      let el = {};
      el.func = function (ev) {
        return "Element " + i;
      };
      arr.push(el);
    }

    for (var j = 0; j < arr.length; j++) {
      console.log(arr[j].func());
    }
  }
}

/**
 * Redeclaring the same variable within the same function or block scope raises a SyntaxError.
 */
// let x = 2;
// let x = 3; // raises syntax error

