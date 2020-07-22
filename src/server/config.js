
const path = require('path');


module.exports = app => {
 
    //Setting
    app.set('port', process.env.PORT || 3000);
    app.set('views', path.join(__dirname, 'views'));

    // middlewares


    // routes


    // errohandlers



    return app;
};
