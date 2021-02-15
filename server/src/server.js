const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

//DO NOT LEAVE THIS EXPOSED
const MONGO_DB_URI =
  "mongodb+srv://triviawithfriends:L5JMS76KF1ZLF3em@cluster0.jxjhv.mongodb.net/trivia?retryWrites=true&w=majority";

mongoose.connect(MONGO_DB_URI || "mongodb://localhost/triviawithfriends", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan("tiny"));
app.use('/api', routes);
app.listen(PORT, console.log(`Server is running at port ${PORT}`));