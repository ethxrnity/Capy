const { Schema, model } = require('mongoose');

const reqString = {
    type: String,
    required: true,
}

const languageSchema = new Schema({
   _id: reqString,
   language: reqString,
})

module.exports = model("Language", languageSchema, "languages");