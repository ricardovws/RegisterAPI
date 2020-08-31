const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/noderest', 
{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })



module.exports = mongoose