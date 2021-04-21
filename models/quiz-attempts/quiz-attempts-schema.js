const mongoose = require('mongoose')
const questionsSchema = require("../questions/questions-schema");

const quizAttempts = new mongoose.Schema({
  score: Number,
  quiz : {
    type : String,
    ref : "QuizzesModel"
  },
  answers : [questionsSchema]
}, {collection : "quizAttempts"});

module.exports = quizAttempts;