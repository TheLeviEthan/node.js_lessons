const fs = require('fs')
const path = require('path')


//DONT HARDCODE FILE NAMES, MAKE IT WORK WITH MULTIPLE OSs
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
})


console.log('Hello...') // data is ASYNCHRONOUS

 
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you.', (err) => {
    if(err) throw err;
    console.log("Write complete");

    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nYes it is', (err) => {
        if(err) throw err;
        console.log("Append complete");
    })
})





process.on('uncaughtException', (err) => {
    console.error('there was an uncaught error: ${err}');
    process.exit(1);
})