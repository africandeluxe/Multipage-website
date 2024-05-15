import express from "express";
import { mathData } from '../data/math.js';

const mathRouter = express.Router();

mathRouter.get('/', (req, res) => {
  res.render('pages/subject', {
    pageTitle: mathData.pageTitle,
    subTitle: mathData.subTitle,
    className: mathData.className,
    topics: mathData.topics,
    baseUrl: 'math'
  });
});

mathRouter.get('/:topic', (req, res) => {
  const topic = mathData.topics.find(t => t.slug === req.params.topic);
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

export default mathRouter;