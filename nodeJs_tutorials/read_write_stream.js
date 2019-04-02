//Readable and writeable stream

const fs= require('fs');
const readStream = fs.createReadStream('./tutorials/example.txt','utf8');
const writeStream = fs.createWriteStream('./tutorials/examples.txt');
readStream.on('data',(chunk)=>{
//console.log(chunk);
writeStream.write(chunk);
});