
const quizAttemptsModel = require('../models/quiz-attempts/quiz-attempts-model');

const scoreQuiz = (questions) => {
  let numberOfCorrectQuestions = 0;
  questions
  .forEach(q =>
      q.answer === q.correct
          ? numberOfCorrectQuestions++
          : numberOfCorrectQuestions
  );
  return 100 * numberOfCorrectQuestions / questions.length;
}

const findAttemptsForQuiz = (qzid) =>
    quizAttemptsModel
    .find({quiz: qzid})
    .populate('quiz', 'title _id')
    .exec()

const createAttempt = (qid, attempt) => {
  return quizAttemptsModel.create({
    quiz : qid,
    answers : attempt,
    score : scoreQuiz(attempt)
  })
}

module.exports = {createAttempt, findAttemptsForQuiz}