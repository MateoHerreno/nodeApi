var mongoose = require('mongoose')
require('dotenv').config();

const url = `mongodb+srv://${process.env.USERDB}:${process.env.PASSWORD}@adso2669736.7fyvwvj.mongodb.net/${process.env.DB}`

mongoose.connect(url)
module.exports = mongoose;