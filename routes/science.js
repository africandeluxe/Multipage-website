import express from "express";

const scienceRouter = express.Router();
const physicsRouter = express.Router();
const biologyRouter = express.Router();


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

physicsRouter.get('/physics', (req, res) => 
  res.render('pages/subpage', 
  {
    pageTitle: 'Physics',
    subTitle: 'Physics is the branch of science concerned with the nature and properties of matter and energy. It includes subjects such as mechanics, heat, light and other radiation, sound, electricity, magnetism, and the structure of atoms.',
    className: 'Science'
  })
);

biologyRouter.get('/biology', (req, res) => 
  res.render('pages/subpage', 
  {
    pageTitle: 'Biology',
    subTitle: 'Biology is the natural science that studies life and living organisms, including their physical structure, chemical processes, molecular interactions, physiological mechanisms, development, and evolution.',
    className: 'Science'
  })
);

export default scienceRouter;