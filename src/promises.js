module.exports = () => {
    var longFn = function () {
        return new Promise(function (res, rej) {
            setTimeout(res, 1000);
        });
    };
    // logs cool after 1 second
    let prom = longFn();
    prom.then(()=>{
        console.log('success');
    }).catch(()=>{
        console.log('error')
    });
}