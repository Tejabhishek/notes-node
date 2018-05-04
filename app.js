console.log('Starting App.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');


const notes = require('./notes.js');



const argv = yargs.argv;
var command = argv._[0];
console.log("Command :", command);
console.log('Process:',process.argv);
console.log('Yargs:',yargs.argv);


if(command === 'add') {
  console.log('Adding new note');
  notes.addNote(argv.title,argv.body);
} else if(command === 'list') {
  console.log('Listing nodes');
  notes.getAll();
} else if(command === 'read') {
  console.log('In app.js Reading note');
  notes.getNote(argv.title);
} else if(command === 'remove'){
  console.log('In app.js Removing note');
  notes.removeNote(argv.title);
} else {
  console.log("Command not found");
}



























//
// const os = require('os');
// var dup = [1,1,1,3,4];
//
// var filteredArray = _.uniq(dup)
// console.log(filteredArray);
//
// //
// // console.log(_.isString('string'))
// // console.log(_.isString(true));
// // console.log();
//
// var res = notes.addNote();
// console.log(res);
//
// var res2 = add(2,5);
// console.log("Hello, ",res2);
//
//
//





//
// var user = os.userInfo();
//
//
// // console.log(user.username);
// // console.log(notes.age);
//
// fs.appendFileSync('greetings.txt', `\nHello ${user.username}!\nYou are ${notes.age}`);
// //fs.appendFileSync('greetings.txt',`Hello ${user.username} !! You are ${notes.age}`);
//

// const fs = require('fs');
// const os = require('os');
// const _ = require('lodash');
// const notes = require('./notes.js');
// const yargs = require('yargs')
//
//
//
//
// const argv = yargs.argv;
// var command = argv._[0];
// console.log('Command: ' ,command);
// //console.log(process.argv);
//
// console.log('yargs : ', argv);
//
// if (command === 'add'){
//   console.log('Adding New Note');
//   notes.addNote(argv.title,argv.body);
// } else if (command === 'list') {
//   console.log('Listing All Notes');
//   notes.getAll();
// } else if (command === 'read') {
//   console.log('Fetching Note..');
//   notes.getNote(argv.title);
// }
//  else if (command === 'remove') {
//   console.log('Removing the note..');
//   notes.removeNote(argv.title);
// }
//  else {
//   console.log('Command Not Found!');
// }
//
//
//
// ----------------------------------------------

//
// var res = notes.addNote();
// console.log(res);
//
// console.log(_.isString(true));
// console.log(_.isString('Abhi'));

// var filteredArray=_.uniq(['Abhi',1,1,'Abhi',1,2,3,4]);

// console.log(filteredArray);
//fs.appendFileSync('greetings.txt','Hello world!');
// var user = os.userInfo();

//console.log(dem.uid);
//fs.appendFileSync('greetings.txt',`Hello ${user.username} !! You are ${notes.age}`);
//
// var res2 = notes.add(1,2);
// console.log(res2);
// console.log('Result: '+notes.add(-9,-2));
//
