'use strict';

module.exports = function () {
    var echo = function echo() {
        var msg = arguments.length <= 0 || arguments[0] === undefined ? 'Default' : arguments[0];
        console.log(msg);
    };
    echo(); // This is a default message.
    echo(5); // This is a different message!
};