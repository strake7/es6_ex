'use strict';

module.exports = function () {
    var longFn = function longFn() {
        return new Promise(function (res, rej) {
            setTimeout(res, 1000);
        });
    };
    // logs cool after 1 second
    longFn().then(function () {
        console.log('success');
    }).catch(function () {
        console.log('error');
    });
};