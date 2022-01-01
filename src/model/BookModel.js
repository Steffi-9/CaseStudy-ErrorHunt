const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://steffi:steffi@cluster0.npwp5.mongodb.net/Library?retryWrites=true&w=majority");
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;