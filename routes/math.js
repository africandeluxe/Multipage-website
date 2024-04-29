import express from "express";

const mathRouter = express.Router();
const algebraRouter = express.Router();
const geometryRouter = express.Router();

mathRouter.get('/', (req, res) => 
res.render(
  "pages/subject",
  {
    pageTitle: "Math",
    subTitle: "Learn High school Math",
    className: "math",
  }
)
);

algebraRouter.get('/algebra', (req, res) => 
  res.render('pages/subpage', 
  {
    pageTitle: 'Algebra',
    subTitle: 'Algebra is a branch of mathematics dealing with symbols and the rules for manipulating these symbols.',
    className: 'Math'
  })
);

geometryRouter.get('/geometry', (req, res) => 
  res.render('pages/subpage', 
  {
    pageTitle: 'Geometry',
    subTitle: 'Geometry involves the study of shapes, sizes, relative positions of figures, and properties of space.',
    className: 'Math'
  })
);

export default mathRouter;