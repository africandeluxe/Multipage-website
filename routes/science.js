import express from "express";
import { scienceData } from '../data/science.js';

const scienceRouter = express.Router();

scienceRouter.get('/', (req, res) => {
  res.render('pages/subject', {
    pageTitle: scienceData.pageTitle,
    subTitle: scienceData.subTitle,
    className: scienceData.className,
    topics: scienceData.topics,
    baseUrl: 'science'
  });
});

scienceRouter.get('/:topic', (req, res) => {
  const topic = scienceData.topics.find(t => t.slug === req.params.topic);
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

export default scienceRouter;