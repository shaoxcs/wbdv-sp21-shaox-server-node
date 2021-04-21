const quizzes = require("./services/quizzes/quizzes.json");
const quizzesModel = require('./models/quizzes/quizzes-model');

const questions = require("./services/questions/questions.json");
const questionsModel = require("./models/questions/questions-model");

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://webdev-user:123@cluster0.hteq5.mongodb.net/whiteboard?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
).then(() => {
  console.log("CONNECTION OPEN")
})
.catch(err => {
  console.log("CONNECTION ERROR");
  console.log(err)
});

quizzes.forEach((q) => {
  quizzesModel
  .create(q)
  .then(q => console.log(q))
  .catch(e => console.log(e));
  // console.log(q)
})

questions.forEach((q) => {
  questionsModel
  .create(q)
  .then(q => console.log(q))
  .catch(e => console.log(e))
});

