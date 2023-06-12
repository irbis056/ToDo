const express = require('express');
const app = express();
const http = require('http');
const url = require('url');
const bodyParser = require('body-parser');
const toDoController = require('./controllers/toDoControllers');
const toDoRouter = require('./routes/toDoRoutes');
// const userRouter = require('./routes/userRoutes');
const fs = require('fs');
const mongoose = require('mongoose');

// const server = http.createServer((req, res) => {});
// Express teraz się zajmuje połączeniem z serwerem

app.use(bodyParser.json());

// app.use('/', userRouter);

app.use('/', toDoRouter);

const DB =
  'mongodb+srv://irbis:123@todo.2cx7o0k.mongodb.net/todo?retryWrites=true&w=majority';

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'));

app.listen(3000, () => {
  console.log('Listening for requests on port 3000');
});

// AUTHCONTROLLER DO DOKOŃCZENIA - Zrobione logowanie i prosty auth controller
