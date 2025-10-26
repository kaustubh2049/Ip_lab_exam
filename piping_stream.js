const fs = require('fs');
const readstream= fs.createReadStream('input2.txt','utf8');
const writestream = fs.createWriteStream('output2.txt');
readstream.pipe(writestream)
console.log("Piping stream is done !!!!!!")