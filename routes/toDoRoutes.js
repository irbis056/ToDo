const express = require('express');

const toDoController = require('../controllers/toDoControllers');
const authController = require('../controllers/authControllers');

const router = express.Router();

router
  .route('/todos')
  .get(toDoController.getAllToDos)
  .post(toDoController.createToDo);

router
  .route('/todos/:id')
  .get(toDoController.getToDo)
  .patch(toDoController.updateToDo)
  .delete(toDoController.deleteToDo);

module.exports = router;
