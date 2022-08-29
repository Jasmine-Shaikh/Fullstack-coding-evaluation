const jwt = require('jsonwebtoken');
const {User} = require('../database/user');
require('dotenv').config();

const register = async (req, res) => {
    try {
        const newUser = req.body;
        const verify = await User.findOne({email: newUser.email});
        if (verify) {
           return res.status(400).send({message: 'Account already exists'});
        }
        let user = new User(newUser);
        await user.save();
        res.status(200).send(user);
    } catch (error) {
       return res.status(401).send({message : error.message});
    }
}

const userLogin = async (req, res) => {
    try {
        
    } catch (error) {
        return res.status(401).send({message : error.message});
    }
}

const authentication = async (req, res) => {
    try {
    
    } catch (error) {
        return res.status(401).send({message : error.message});
    }
}

module.exports = {register, userLogin, authentication}