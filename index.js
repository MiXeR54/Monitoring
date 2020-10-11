const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("It worksss");
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
