const express = require("express");

const app = express();
const PORT = 80;

app.get("/", (req, res) => {
  res.send("It worksss");
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
