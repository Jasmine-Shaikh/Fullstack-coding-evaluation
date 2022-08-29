const express = require('express');
const { getAlltodos, getTodo, createTodo,updateTodo, deleteTodo } = require('../handlers/todo.js');

const todoRouter = express.Router();

todoRouter.get('/todo', getAlltodos);
todoRouter.get('/todo/:todoid', getTodo);
todoRouter.post('/createTodo', createTodo);
todoRouter.patch('/updateTodo/:todoid', updateTodo);
todoRouter.delete('/deleteTodo/:todoid', deleteTodo);

module.exports = {todoRouter};