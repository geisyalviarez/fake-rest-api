var express = require("express");
var app = express();
const PORT = process.env.PORT || 5001;

app.post("/authenticate", (req, res, next) => {
  res.json({
    accesssToken: "xxxyyyzzz",
    userId: "MarianaC",
    userName: "Mariana Contreras",
    userRol: "student",
  });
});
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
