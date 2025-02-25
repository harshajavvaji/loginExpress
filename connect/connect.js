const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://harshajavvaji04:lf6yqO1bZuib2USu@cluster0.x5lyj.mongodb.net/'

const connect = async () => {
    await mongoose.connect(connectionString);
    console.log("Connected to DB")
}

module.exports = connect;