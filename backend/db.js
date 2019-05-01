var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/snippet',{ useNewUrlParser: true })
    .then(db => console.log('db connected'))
    .catch(err => console.log(err));
