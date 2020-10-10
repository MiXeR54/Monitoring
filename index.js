const express = requere("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("It works");
});

app.list(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
