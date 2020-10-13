const express = require("express");
const { MinecraftQuery } = require("minecraft-status");

const app = express();
const PORT = 80;

app.get("/", async (req, res) => {
  res.send("It worksss max");
  function cb(error, response) {
    if (error) throw error;
    else console.log(response);
  }
  const result = await MinecraftQuery.fullQuery("mc.gladcraft.ru", 25565, cb);
  console.log(result);
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
