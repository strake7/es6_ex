"use strict";

module.exports = function () {
    var _marked = [describeNolan].map(regeneratorRuntime.mark);

    function describeNolan() {
        return regeneratorRuntime.wrap(function describeNolan$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return "Nolan is cool";

                    case 2:
                        _context.next = 4;
                        return "pretty wow";

                    case 4:
                        return _context.abrupt("return", "much cool, very wow");

                    case 5:
                    case "end":
                        return _context.stop();
                }
            }
        }, _marked[0], this);
    }

    var gen = describeNolan();

    console.log(gen.next());
    console.log(gen.next());
    console.log(gen.next());
};