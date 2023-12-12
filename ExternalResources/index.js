//loading json using require

const exampleJson = require('./mockFiles/example.json');
console.log(exampleJson);

//loading txt files using fs module

const fs = require('fs');

const exampleTxt = fs.readFileSync('./mockFiles/example.txt').toString();
console.log(exampleTxt);
