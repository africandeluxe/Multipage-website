import express from "express";
import { historyData } from '../data/history.js';

const historyRouter = express.Router();

historyRouter.get('/', (req, res) => {
  res.render('pages/subject', {
    pageTitle: historyData.pageTitle,
    subTitle: historyData.subTitle,
    className: historyData.className,
    topics: historyData.topics,
    baseUrl: 'history'
  });
});

historyRouter.get('/:topic', (req, res) => {
  const topic = historyData.topics.find(t => t.slug === req.params.topic);
  if (topic) {
    res.render('pages/subpage', {
      pageTitle: topic.pageTitle,
      subTitle: topic.subTitle,
      className: topic.className
    });
  } else {
    res.status(404).send('Topic not found');
  }
});

export default historyRouter;