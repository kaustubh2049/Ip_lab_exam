const fs= require('fs');
const readstream = fs.createReadStream("input.txt", 'utf8');
const writestream = fs.createWriteStream('output.txt')
readstream.on('data',(chunk)=>{
    console.log("Reading Stream");
    console.log(chunk);
    writestream.write(chunk);
});
readstream.on('end',()=>{
console.log("finished reading and writing")
})