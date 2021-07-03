const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

// var ip = require("ip");
// console.dir(ip.address());

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);
const host = "127.0.0.1";
app.listen(port, host, () => {
  console.log("Server is up on port " + port);
});