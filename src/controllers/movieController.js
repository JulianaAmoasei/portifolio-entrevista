import MovieService from "../services/MovieService.js";
import { formatMovieObject } from "../util/helpers.js";

class MovieController {

  static async getMoviePlot (req, res) {
    const movieName = req.query.movie;
    try {
      const movieInfo = await MovieService.getMovieInfo(movieName);
      const movieObj = formatMovieObject(movieInfo);
      const translatedPlot = await MovieService.getTranslation(movieObj);
      res.status(200).json(translatedPlot);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
};

export default MovieController;
