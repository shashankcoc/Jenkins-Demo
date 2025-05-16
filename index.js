const express = require("express");
const app = express();

console.log("Hello from Jenkins Node.js build");

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  return res.json({ messgae: "Hey, I am nodejs container" });
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
