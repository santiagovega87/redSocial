const express = require('express');

const config = require('./server/config');

//data base
require('./database');

// starting the server
const app = config(express());

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});
