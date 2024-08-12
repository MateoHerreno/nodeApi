var mongoose = require('mongoose')
require('dotenv').config();

const url = `mongodb+srv://${process.env.USERDB}:${process.env.PASSWORD}@cluster0.xfz9doq.mongodb.net/${process.env.DB}`

mongoose.connect(url)
module.exports = mongoose;