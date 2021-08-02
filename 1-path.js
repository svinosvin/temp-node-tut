
const path = require('path');
const pathFile = path.join('/content','subfolder','text.txt')

console.log(pathFile);
const base = path.basename(pathFile);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder','text.txt');

console.log(absolute);