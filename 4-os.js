const names = require("./names.js") ;
const sayHi = require("./say-hi");
const os = require('os');
const user = os.uptime()
console.log(sayHi(names.name));
console.log(__dirname);
console.log(names);
console.log(user);
const currentOS = {
name: os.type(),
release: os.release(),
totalMem: os.totalmem(),
freeMem: os.freemem()
}
console.log(currentOS);
