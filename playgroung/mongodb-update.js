const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Cant connect to MongoDb server');
    }
    console.log('Connected to MongoDB server');

    //findOneAndUpdate
    db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5992b04e8e775c42a94d3847')}, {
        $set: {
            completed: false
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    db.close();
});