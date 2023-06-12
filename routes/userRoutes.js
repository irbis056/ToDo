const express = require('express');

const userController = require('../controllers/userControllers');
const authController = require('../controllers/authControllers');

const router = express.Router();

router.route('/login').post(userController.loginUser);

// router
//   .route("/todos/:id")
//   .get(toDoController.getToDo)
//   .patch(toDoController.updateToDo)
//   .delete(toDoController.deleteToDo);

module.exports = router;
