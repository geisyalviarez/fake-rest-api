var express = require("express");
var app = express();
app.post("/authenticate", (req, res, next) => {
  res.json({
    accesssToken: "xxxyyyzzz",
    userId: "MarianaC",
    userName: "Mariana Contreras",
    userRol: "student",
  });
});

app.listen(5001, () => {
  console.log("Server running on port 5001");
});
