const {readFile,writeFile}=require('fs');
const { start } = require('repl');
const { compileFunction } = require('vm');
console.log('start')
readFile('./content/first.txt','utf-8',function(err,data){
if(err){
    console.log(err);
    return
}
const first = data;
readFile("./content/second.txt","utf-8",(err,result)=>{

    if(err){
        console.log(err);
        return;
    }
    const second = result;

    writeFile('./content/newTxt1.txt',
    `first part -  ${first} and second part - ${second}`,(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
        console.log('done this task')
    });
})
})
console.log('start new task')