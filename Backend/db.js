const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb+srv://kaustubh:kaustubhnawade@cluster0.mwnpyuz.mongodb.net/notesapp?retryWrites=true&w=majority");

module.exports={
    connection
}