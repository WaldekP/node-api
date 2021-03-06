var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
const {ObjectID} = require('mongodb');

var app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then(doc => res.send(doc), err => res.status(400).send(err))
});

app.get('/todos', (req, res) => {
  Todo.find().then(todos => res.send({todos}), err => res.status(400).send(err))
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(400).send()
  }
  Todo.findById(id).then(todo => res.send({todo}), err => res.status(400).send(err))
});

app.delete('todos/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(400).send()
  }
  Todo.findByIdAndRemove(id).then(todo => res.send(todo))
});

app.listen(3000, () => {
  console.log(`Started on port ${3000}`)
});

module.exports = {app};