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



const {readFile,writeFile} = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const getText = (path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf-8',(err,data)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })

    })
}

const start = async ()=>{
    try { 
        const first = await getText('./content/first.txt','utf-8');
        const second = await readFilePromise('./content/second.txt','utf-8');
        console.log(first,second);
    } catch (error) {
        
        console.log(error);
    }
}

start();


/*const getText = (path)=>{
    return new Promise((resolve,reject)=>{

        readFile(path,"utf-8",(err,result)=>{

            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        }) 
    })
}*/