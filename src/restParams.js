module.exports = function () {
    const msg = concat(
        'I am the beginning ',
        1,
        'and approaching',
        ' the end'
    );
    console.log(msg)
};

function concat(str, ...args) {
    args.forEach((s) => {
        str += s;
    })
    return str;
}