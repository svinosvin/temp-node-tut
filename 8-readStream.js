const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt',{
    highWaterMark:1000,
    encoding:'utf-8'}); 

stream.on('data', (result)=>{
console.log(result);
})
stream.on('err',(err)=>{
    console.log(err);
})
stream.emit('err');