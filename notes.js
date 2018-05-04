console.log('Starting Notes.js');


var addNote = (title,body) => {
console.log('Adding Note', title,body);
};

var getAll = () => {
  console.log('Getting all notes.. ');
}


var getNote = (title) => {
  console.log('Getting Note :', title);
}

var removeNote = (title) => {
  console.log('Removing Note :', title);
}




module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};



















// console.log(module);
// module.exports.addNote =  () => {
//   console.log('addNote');
//   return 'New Note';
//
// };
//
//
// add = (a,b) => {
//   return a+b;
// }

//---------------------------

// var addNote = (title,body) => {
//   console.log('Adding Note', title, body);
//
// };
//
//
// var getAll = () => {
//   console.log('Getting all nodes');
// };
//
// var getNote = (title) => {
//   console.log('Getting',title, 'note..');
// };
//
//
// var removeNote = (title) => {
//   console.log('Removing the note ', title);
// };
//
// module.exports = {
//   addNote : addNote,
//   getAll : getAll,
//   getNote : getNote,
//   removeNote : removeNote
// }
//
//
// ------------------------------------------------


// module.exports.age = 25;
// module.exports.addNote = () => {
//   console.log('In AddNote');
//   return "New Note";
// }
//
// var a, b;
//
// module.exports.add = (a, b) => {
//   //console.log(a+b);
//   console.log("In add");
//   var c = a+b;
//   return c;
//
//
// }
