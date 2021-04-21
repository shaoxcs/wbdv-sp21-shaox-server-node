const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const morgan = require('morgan');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('common'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
      'Content-Type, X-Requested-With, Origin');
  res.header('Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next();
})

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

require('./controllers/quizzes-controller')(app)
require('./controllers/questions-controller')(app)
require('./controllers/question-attempts-controller')(app)

app.get("/", (req, res) => {
  res.send("Please use /api/xxx to access data")
})

app.listen(process.env.PORT || 4000)