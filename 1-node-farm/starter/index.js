const fs = require('fs');

const file = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(file);

const textOut = `This is what we know about the avocado: ${file}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log('File written!');
