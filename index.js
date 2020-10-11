const express = require("express");

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("It worksss");
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
