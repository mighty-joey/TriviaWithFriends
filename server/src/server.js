const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

//pw - L5JMS76KF1ZLF3em
//DO NOT LEAVE THIS EXPOSED
const MONGO_DB_URI =
  "mongodb+srv://triviawithfriends:L5JMS76KF1ZLF3em@cluster0.jxjhv.mongodb.net/game_data?retryWrites=true&w=majority";

mongoose.connect(MONGO_DB_URI || "mongodb://localhost/triviawithfriends", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});

const schema = new mongoose.Schema({
  gameId: Number,
  gameName: String,
  roundsNumber: Number,
  userId: String
});
const GameData = mongoose.model("game_data", schema);

//POST LOGIC
const data = new GameData({
  gameId: 125,
  gameName: "some game",
  roundsNumber: 5,
  userId: "23443"
});

data.save(error => {
  if (error) {
  } else {
    console.log("saved!");
  }
});
//END POST LOGIC

//FETCH LOGIC
app.get("/api", (req, res) => {
  GameData.find({}).exec(
    response => {
      res.json(response);
    },
    () => res.json({ error: "error" })
  );
});
//END FETCH LOGIC

app.use(morgan("tiny"));
app.listen(PORT, console.log(`Server is running at port ${PORT}`));
