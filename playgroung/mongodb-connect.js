//var MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Cant connect to MongoDb server');
    }
    console.log('Connected to MongoDB server');

/*
    db.collection('Todos').insertOne({
        'text': 'Task 1',
        'completed': 'false'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.collection('Users').insertOne({
        name: 'Daria',
        age: 25,
        location: 'Amsterdam'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err);
        }
        console.log(result.ops[0]._id.getTimestamp());
    });
*/

    db.close();
});