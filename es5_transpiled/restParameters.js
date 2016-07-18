'use strict';

module.exports = function () {
    var msg = concat('The {0}st arg is a string, the {1} are {2}.', 1, 'rest', 'unknown');
};

function concat(str) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    args.forEach(function (s) {
        str += s;
    });
    return str;
}