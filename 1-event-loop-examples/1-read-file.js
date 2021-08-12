const {readFile} = require('fs');
console.log('start first task');
readFile("../content/first.txt","utf-8",(err,result)=>{
if(err){
    console.log(err);
    return;
}

console.log(result);
console.log("finished first task");
})
console.log("staring second task");