module.exports = () => {
    function* describeNolan() {
        yield "Nolan is cool";
        yield "pretty wow";
        return "much cool, very wow";
    }

    var gen = describeNolan();

    console.log(gen.next());
    console.log(gen.next());
    console.log(gen.next());
}