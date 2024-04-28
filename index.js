import express from "express";

const app = express();
const port = 3002;

app.get('/', (req, res) => {
  res.send("...")
});

app.listen(port, console.log(`It's port ${port}`));