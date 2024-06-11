const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user.router");
const postRouter = require("./routes/post.router");
const authLog = require("./routes/auth.router");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", userRouter);
app.use("/post", postRouter);
app.use("/auth", authLog);

app.get("/", (request, response) => {
  response.json({
    message: "User Api v1",
  });
});

module.exports = app;
