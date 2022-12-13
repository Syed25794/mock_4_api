const express = require("express");

const connection = require("./config/database");
const userRouter = require("./routes/userRoutes.routes");

const app = express();
require("dotenv").config();


app.use(express.json());

const PORT = process.env.LOCALHOST_PORT || 8080

app.use("/user",userRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Home Page.");
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected");
    console.log(`Server is runnning on the localhost port : 8080`);
  } catch (err) {
    console.log(err);
    console.log("Something went wrong in connecting with database.");
  }
});
