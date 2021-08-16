var express = require("express");
var app = express();
app.post("/authenticate", (req, res, next) => {
  res.json({ token: "123456" });
});
app.listen(5001, () => {
  console.log("Server running on port 5001");
});
