const EventEmitter = require('events');
const customEmitter = new EventEmitter();
customEmitter.on('response',()=>{
    console.log('data recieved')
})
customEmitter.on('response1',(nameData)=>{
    console.log(`${nameData} data recieved`)
})
customEmitter.on('response1',()=>{
    console.log('data recieved')
})
customEmitter.emit('response1', 'sql')