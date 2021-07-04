const app = require("./app");

// var ip = require("ip");
// console.dir(ip.address());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
