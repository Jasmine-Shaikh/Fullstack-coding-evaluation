const jwt = require('jsonwebtoken');
const {Todo} = require('../database/todos');


const getAlltodos = async (req, res) => {
    try {
        return res.status(200)
    } catch (error) {
        return res.status(401).send({message: error.message});
    }
}

const getTodo = async (req, res) => {
    try {
        const {todoid} = req.params;
        const getTodo = await Todo.findById(todoid);
        return res.status(200).send(getTodo);
    } catch (error) {
        return res.status(401).send({message: error.message});
    }
}

const createTodo = async (req, res) => {
    try {
    
    } catch (error) {
        return res.status(401).send({message: error.message});
    }
}

const deleteTodo = async (req, res) => {
    try {
        const {todoid} = req.params;
        await Todo.findByIdAndDelete(todoid);
        return res.status(200).send({message: 'Todo deleted'});
    } catch (error) {
        return res.status(401).send({message: error.message});
    }
}

const updateTodo = async (req, res) => {
    try {
    } catch (error) {
        return res.status(401).send({message: error.message});
    }
}

module.exports = {getAlltodos, getTodo, createTodo , deleteTodo, updateTodo};