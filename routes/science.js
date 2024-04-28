import express from "express";

const scienceRouter = express.Router;

scienceRouter.get('/', (req, res) => res.send("Science"));

export default scienceRouter;