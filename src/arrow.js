module.exports = () => {
    let square = x => x * x;
    let sum = (a, b) => a + b;
    let diff = (a, b) => { return a - b; };
    let found = [1, 2, 3].find((v) => v === 1)

    console.log(square(5)); // 25
    console.log(sum(3, 4)); // 7
    console.log(diff(2, 1)); // 1
    console.log(found); // 1
}

