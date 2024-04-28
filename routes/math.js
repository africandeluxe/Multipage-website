import express from "express";

const mathRouter = express.Router;

mathRouter.get('/', (req, res) => res.send("Math"));

export default mathRouter;