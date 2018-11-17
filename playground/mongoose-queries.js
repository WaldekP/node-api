const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');

var id = '5bf02aee8452f5982988cad2';

if (!ObjectID.isValid(id)) {
  console.log('Id not valid')
}

Todo.find({
  _id: id
}).then(todos => console.log('Todos', todos));

Todo.findOne({
  _id: id
}).then(todo => console.log('Todo', todo));

Todo.findById(id).then(todo => {
  if (!todo) {
    return console.log('Id not found')
  }
  console.log('By id', todo)}).catch(e => console.log(e));