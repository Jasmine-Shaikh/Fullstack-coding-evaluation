const express = require('express');
const { register, userLogin, authentication } = require('../handlers/user.js');

const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/login', userLogin);
userRouter.post('/authentication', authentication);


module.exports = {userRouter};