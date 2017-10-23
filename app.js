console.log('Starting App..');

const fs = require('fs');
const os = require('os');


fs.appendFileSync('greetings.txt','Hello world!');
var dem = os.userInfo();

//console.log(dem.uid);
fs.appendFileSync('greetings.txt','Hello, '+dem.username+'!');
