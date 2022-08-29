const express = require('express');
const app = express();
const cors = require('cors');
const {userRouter} = require('./routes/user.js');
const {todoRouter} = require('./routes/todo.js');
require('dotenv').config()
const port = process.env.PORT || 8080;
require("./database/index.js");
app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(todoRouter);

app.use((req, res, done) => {
    done()}
);

app.listen(port, () => {
    console.log(`SERVER RUNNING ON ${port}`);
});