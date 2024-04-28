import express from "express";

const historyRouter = express.Router;

historyRouter.get('/', (req, res) => res.render
(
  "pages/subject",
  {
    pageTitle: "History",
    subTitle: "Learn High School Science"
  }
)
);

export default historyRouter;