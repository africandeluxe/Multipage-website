import express from "express";
import { mathTopics } from "../data/topics.js";

const mathRouter = express.Router;

mathRouter.get('/', (req, res) => 
res.render(
  "pages/subject",
  {
    pageTitle: "Math",
    subTitle: "Learn High school Math",
    className: "math",
    topics: "mathTopics"
  }
)
);

export default mathRouter;