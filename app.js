console.log('Starting App..');

const fs = require('fs');
const os = require('os');


fs.appendFileSync('greetings.txt','Hello world!');
var user = os.userInfo();

//console.log(dem.uid);
fs.appendFileSync('greetings.txt',`Hello ${user.username} !!`);
