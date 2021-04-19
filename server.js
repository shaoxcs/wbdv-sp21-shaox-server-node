const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const morgan = require('morgan');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan);

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
      'Content-Type, X-Requested-With, Origin');
  res.header('Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next();
})

mongoose.connect("mongodb://localhost:27017/whiteboard",
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

require('./controllers/quizzes-controller')(app)
require('./controllers/questions-controller')(app)
require('./controllers/question-attempts-controller')(app)

app.get("/", (req, res) => {
  res.send("Welcome, please use /api/xxx to access data")
})

app.listen(process.env.PORT || 4000)