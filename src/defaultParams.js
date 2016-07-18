module.exports = () => {
    let echo = (msg = 'Default') => { console.log(msg) }
    echo(); // This is a default message.
    echo(5); // This is a different message!
}