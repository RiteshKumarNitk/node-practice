require("dotenv").config();
const { connectMongoDb } = require("./connection");

const express = require("express");
const userRouter = require("./routes/user");
const { logReqRes } = require("./middlewares");

const app = express();
const port = process.env.PORT || 8000;

connectMongoDb(); // Automatically picks up from .env

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // Recommended if handling JSON
app.use(logReqRes("log.txt"));

// Routes
app.use("/api/user", userRouter);

// Server start
app.listen(port, () =>
  console.log(`Server started at http://localhost:${port}`)
);
