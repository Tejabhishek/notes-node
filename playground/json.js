

const fs = require('fs');

var originalNote = {
  title: 'Some Title',
  body: 'Some Body'
};


var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString)


var noteString = fs.readFileSync('notes.json');
console.log(noteString);
var note = JSON.parse(noteString);
console.log(note);
console.log(note.title);
console.log('Type of note', typeof note);





// var obj = {
//   name:'Abhi'
// }
//
// console.log(obj);
// var string = JSON.stringify(obj);
// console.log(typeof obj);
// console.log(string);
// console.log(typeof string);
//
//
// console.log(typeof obj);
// var personString = JSON.parse(string)
// console.log(personString);
// console.log(typeof personString);
//



// var obj = {
//   name : 'Abhi'
// };
//
//
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

//
// var personString = '{"name":"Abhi", "age":25}';
// var person = JSON.parse(personString);
// console.log(typeof personString);
// console.log(person);
// console.log(typeof person);
//
// const fs = require('fs');
//
// var originalNote = {
//   title: 'Some Title',
//   body : 'Some Body'
// };
