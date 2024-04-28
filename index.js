import express from "express";
import mathRouter from "./routes/math.js";
import scienceRouter from "./routes/science.js";
import historyRouter from "./routes/history.js";


const app = express();
const port = 3002;

app.get('/', (req, res) => {
  res.send("...")
});

app.use("/math", mathRouter);
app.use("/history", historyRouter);
app.use("/science", scienceRouter);

app.listen(port, console.log(`It's port ${port}`));