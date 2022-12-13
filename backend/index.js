const express = require("express");

const connection = require("./config/database");
const userRouter = require("./routes/userRoutes.routes");

const app = express();
require("dotenv").config();


app.use(express.json());

app.use("/user",userRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Home Page.");
});

app.listen(process.env.LOCALHOST_PORT, async () => {
  try {
    await connection;
    console.log("Connected");
    console.log(`Server is runnning on the localhost port : 8080`);
  } catch (err) {
    console.log(err);
    console.log("Something went wrong in connecting with database.");
  }
});
