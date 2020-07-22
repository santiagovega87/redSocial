const moongose = require('mongoose');

const { database } = require('./keys');

moongose.connect(database.URI, {
    useNewUrlParser: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));