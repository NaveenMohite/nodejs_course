
const fs= require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
// const readStream = fs.createReadStream('./example.txt','utf8');
// const writeStream = fs.createWriteStream('examples.txt.gz');
//readStream.pipe(gzip).pipe(writeStream);


const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream('./examples.txt.gz');
const writeStream = fs.createWriteStream('uncompressed.txt');
readStream.pipe(gunzip).pipe(writeStream);


