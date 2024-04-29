import express from "express";

const scienceRouter = express.Router();

scienceRouter.get('/', (req, res) => 
res.render(
  "pages/subject",
  {
    pageTitle: "Science",
    subTitle: "Learn High School Science",
    className: "science"
  }
)
);

export default scienceRouter;