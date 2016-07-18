var prompt = require('prompt');
var lets = require('./src/let.js');
var arrow = require('./src/arrow.js');
var classes = require('./src/class.js');
var defaultParams = require('./src/defaultParams.js');
var restParams = require('./src/restParams.js');
var destructured = require('./src/destructured.js');
var generators = require('./src/generators.js');
var promises = require('./src/promises.js');

var inputSchema = [{
    name: 'cmd',
    description: 'es6 feature:'
}];
var cmdActions = [
    { cmd: 'let1', fn: lets.ex1 },
    { cmd: 'let2', fn: lets.ex2 },
    { cmd: 'arrow', fn: arrow },
    { cmd: 'class', fn: classes },
    { cmd: 'defaultParams', fn: defaultParams },
    { cmd: 'restParams', fn: restParams },
    { cmd: 'destructured', fn: destructured },
    { cmd: 'generators', fn: generators },
    { cmd: 'promises', fn: promises },
]
var availableCmds = cmdActions.map((i) => {
    return i.cmd;
}).join('\r\n\t');
console.log('Welcome to es6 examples...')
console.log(`Available commands: \r\n\t${availableCmds}`)

prompt.start();
promptExampleInput();


/////////


function promptExampleInput() {
   var p = prompt.get(inputSchema, (
        err, result) => {
        if (err) throw new Error(err);
        var cmd = cmdActions.find((c)=>{
            return c.cmd === result.cmd;
        });
        if(cmd && cmd.fn)
            cmd.fn();        
        else
            console.log(`${result.cmd} is not a valid command.`);             
        console.log('Execution complete...');
        promptExampleInput(); // recursive   
    }
    );
}


