let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let emailSchema = new Schema({
   id: String,
   email: String,
   name: String,
   text: String,
   date: Date 
});

let Email = mongoose.model('Emails', emailSchema, 'emails' );

module.exports = {Email};