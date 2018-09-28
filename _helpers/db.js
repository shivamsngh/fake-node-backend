const config = require('../config.json');
const mongoose = require('mongoose');
mongoose.connect(config.connectionString, { useNewUrlParser: true } );
mongoose.set('useCreateIndex', true);   
mongoose.set('useFindAndModify', false); 
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../models/user.model')
};