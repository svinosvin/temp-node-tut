const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt',{encoding:'utf-8'});


stream.on('data',(data)=>{
    console.log(data);
})
stream.on('end',()=>{
    console.log("Finished process");
})

stream.on('err',(err)=>{
    console.log(err);
})