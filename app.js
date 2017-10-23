console.log('Starting App.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');


//fs.appendFileSync('greetings.txt','Hello world!');
var user = os.userInfo();

//console.log(dem.uid);
fs.appendFileSync('greetings.txt',`Hello ${user.username} !!`);
