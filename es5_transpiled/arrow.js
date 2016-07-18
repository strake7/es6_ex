"use strict";

module.exports = function () {
    var square = function square(x) {
        return x * x;
    };
    var sum = function sum(a, b) {
        return a + b;
    };
    var diff = function diff(a, b) {
        return a - b;
    };
    var found = [1, 2, 3].find(function (v) {
        return v === 1;
    });

    console.log(square(5)); // 25
    console.log(sum(3, 4)); // 7
    console.log(diff(2, 1)); // 1
    console.log(found); // 1
};