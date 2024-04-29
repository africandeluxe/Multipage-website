import express from "express";

const historyRouter = express.Router();

historyRouter.get('/', (req, res) => res.render
(
  "pages/subject",
  {
    pageTitle: "History",
    subTitle: "Learn High School Science",
    className: "history"
  }
)
);

historyRouter.get('/ancient', (req, res) => res.render
(
  'pages/subpage', 
{
  pageTitle: 'Ancient History',
  subTitle: 'Ancient History explores the early civilizations like Egypt, Mesopotamia, and the Indus Valley.',
  className: 'History'
})
);

historyRouter.get('/modern', (req, res) => 
res.render('pages/subpage', 
{
  pageTitle: 'Modern History',
  subTitle: 'Modern History covers events from the late 15th century onwards, including the Renaissance, Industrial Revolution, World Wars, and the Information Age.',
  className: 'History'
})
);

export default historyRouter;