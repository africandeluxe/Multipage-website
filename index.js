import express from "express";
import mathRouter from "./routes/math.js";
import scienceRouter from "./routes/science.js";
import historyRouter from "./routes/history.js";
import * as path from "path";


const app = express();
const port = 3002;
const __dirname = path.resolve();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get('/', (req, res) => {
  res.render(
    "pages/home.ejs",
    {
      pageTitle: "Welcome to LearnHub!",
      subTitle: "The Future of Learning at LearnHub"

    }
  )
});

app.use("/math", mathRouter);
app.use("/history", historyRouter);
app.use("/science", scienceRouter);

app.use(express.static("public"));


app.listen(port, console.log(`It's port ${port}`));