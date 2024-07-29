const mongoose = require('mongoose');
const debug = require('debug')("app:main");
const config = require('config');

module.exports = function(){
    mongoose
        .connect(config.get('db.address'))
        .then(() => console.log(`connected to mongodb`))
        .catch(() => console.log(`mongodb connection failed`));
}