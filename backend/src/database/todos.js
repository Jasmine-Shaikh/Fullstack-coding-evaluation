const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
        taskname: String,
        status: String,
        tag: String,
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        }
    },
    {
        timestamps: true,
    }
);

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;