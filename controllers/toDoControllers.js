const fs = require('fs');
const mongoose = require('mongoose');
const ToDos = require('../models/toDoModel');

// let todos = JSON.parse(fs.readFileSync(`${__dirname}/../data/toDoData.json`));

exports.getAllToDos = async (req, res) => {
  try {
    const toDos = await ToDos.find(req.query);
    res.status(200).json({
      status: 'success',
      data: toDos,
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to retrieve todos',
    });
  }
};

exports.getToDo = async (req, res, next) => {
  try {
    const toDo = await ToDos.findById(req.params.id);

    if (!toDo) {
      return next(
        res.status(404).json({
          status: 'error',
          message: 'To do not found',
        })
      );
    }

    res.status(200).json({
      status: 'success',
      data: toDo,
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch to do',
    });
  }
};

exports.updateToDo = async (req, res, next) => {
  try {
    const toDo = await ToDos.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!toDo) {
      return next(
        res.status(404).json({
          status: 'error',
          message: 'To do not found',
        })
      );
    }
    res.status(200).json({
      status: 'Updated succesfully',
      data: toDo,
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to update to do',
    });
  }
};

exports.createToDo = async (req, res, next) => {
  try {
    const newToDo = await ToDos.create(req.body);
    res.status(201).json({
      status: 'Created succesfully',
      data: newToDo,
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to create to do',
    });
  }
};

exports.deleteToDo = async (req, res, next) => {
  try {
    const toDo = await ToDos.findByIdAndDelete(req.params.id);
    if (!toDo) {
      return next(
        res.status(404).json({
          status: 'error',
          message: 'To do not found',
        })
      );
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to delete to do',
    });
  }
};
