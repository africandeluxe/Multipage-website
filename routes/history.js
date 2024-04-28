import express from "express";

const historyRouter = express.Router;

historyRouter.get('/', (req, res) => res.send("History"));

export default historyRouter;