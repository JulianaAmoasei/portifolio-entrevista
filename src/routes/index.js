import express from "express";
import MovieController from "../controllers/movieController.js";

const routes = (app) => {
  app.use(express.json());
  app.route("/").get((req, res) => res.status(200).send("Rota inicial"));
  app.get("/movie/search", MovieController.getMoviePlot);
};

export default routes;
