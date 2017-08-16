var mongoose = require('mongoose');

const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var User = mongoose.model('User', {
    email: {
        type: String,
        required: [true, 'user email required!'],
        trim: true,
        validate: {
            validator: (value) => {
                return EMAIL_REGEXP.test(value);
            }, message: 'Is not valid email'
        }
    }
});

module.exports = {User};