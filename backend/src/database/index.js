const mongoose = require("mongoose");

async function connectDatabase() {
    const mongoUrl = "mongodb://127.0.0.1:27017/todo";
    try {
        mongoose.connect(
          mongoUrl,
          { useNewUrlParser: true, useUnifiedTopology: true },
          () => console.log("Mongoose connected"),
        );
      } catch (e) {
        console.log("Mongoose connection error");
      }
      const dbConnection = mongoose.connection;
      dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
      dbConnection.once("open", () => console.log("Connected to DB!"));
}

module.exports = connectDatabase;


