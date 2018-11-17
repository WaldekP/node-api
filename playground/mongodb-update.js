const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB ');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5be81be2067782628e9ec6e9')
  }, {
    $set: {
      name: 'Waldi'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

});