const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB ');

//delete many
//   db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
//     console.log('Result', result)
//   })

//delete one
//   db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=> {
//     console.log('Result', result)
//   })
//findOneAndDelete
  db.collection('Todos').findOneAndDelete({completed: true}).then((result) => console.log('Result', result))

});