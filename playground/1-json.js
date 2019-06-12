//const chalk = require('chalk')
const fs = require('fs')
const dataBuffer = fs.readFileSync('1-json.json');
const data_string = dataBuffer.toString();
const jsonData = JSON.parse(data_string);
jsonData.name = 'Harpreet'
jsonData.Age = 21
const data_string2 = JSON.stringify(jsonData);
console.log(data_string2)
fs.writeFileSync('1-json.json',data_string2)