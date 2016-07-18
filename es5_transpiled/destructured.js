'use strict';

module.exports = function () {
    var obj = { first: 'Jane', last: 'Doe', Middle: 'Ulga' };
    var f = obj.first;
    var l = obj.last;

    console.log(f, l); // Jane, Doe

    var _ref = ['a', 'b', 'c'];
    var x = _ref[0];
    var y = _ref[1]; // What is x and y
    // so if I want to grab the first element of an array now?

    var w = 'a';
    var z = ['b', 'c']; // What is x and y
};