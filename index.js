const PORT = 5000;

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const usersRouter = require("./routes/users");
const messagesRouter = require("./routes/messages");
require("dotenv").config();

const cors = require("cors");

const uri = process.env.MONGO_DB_URI;

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/users", usersRouter); // localhost:5000/users
app.use("/messages", messagesRouter); // localhost:5000/messages

app.get("/", (req, res) => {
  res.json("Hello to Hooked! connected");
});

// app.post("/signup", (req, res) => {
//   res.json("Hello to Hooked!");
// });

// app.get("/users", (req, res) => {
//     new
//   });

mongoose
  .connect(uri)
  .then(() => console.log("Connected to Database!"))
  .then(() => {
    app.listen(PORT, () => console.log("server running on PORT " + PORT));
  });
