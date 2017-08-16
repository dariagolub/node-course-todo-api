const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '59949f673cea3a4a6f9c23bd';
if (!ObjectId.isValid(id)) {
    console.log('Id not valid');
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findById(id).then((todo) => {
    if (!todo) {

    }
    console.log('Todo by id', todo)
}).catch((e) => console.log(e));