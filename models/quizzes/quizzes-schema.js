const mongoose = require('mongoose');
const quizzesSchema = new mongoose.Schema({
  _id : String,
  title : String
}, {collection : "quizzes"});

module.exports = quizzesSchema;