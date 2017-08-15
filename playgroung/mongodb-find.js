const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Cant connect to MongoDb server');
    }
    console.log('Connected to MongoDB server');

    //find return mongodb cursor
    db.collection('Todos').find({
        _id: new ObjectID('5992b04e8e775c42a94d3847')
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err)
    });

    db.close();
});