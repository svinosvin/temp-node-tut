const http = require('http');
const server = http.createServer((req,res)=>{

if(req.url ==="/"){
res.end('<h1>WELCOME </h1>');

}
else if(req.url ==="/about"){
    res.end('tell me about');
}
else{

    res.end(`<h1>OOps</h1>
     <p>Back to main page</p>
     <a href="/">click</a>`);
    
}

 

})
server.listen(5000)
