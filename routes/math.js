import express from "express";

const mathRouter = express.Router;

mathRouter.get('/', (req, res) => 
res.render(
  "pages/subject",
  {
    pageTitle: "Math",
    subTitle: "Learn High school Math",
    className: "math"
  }
)
);

export default mathRouter;