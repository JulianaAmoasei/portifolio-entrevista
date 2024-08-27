import MovieService from "../services/MovieService.js";
import { formatMovieResponse } from "../util/helpers.js";

class MovieController {

  static async getMoviePlot (req, res) {
    const movieName = req.query.movie;
    try {
      const movieInfo = await MovieService.getMovieInfo(movieName);
      const response = formatMovieResponse(movieInfo)
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ message: error.message }.Plot);
    }
  };
};

export default MovieController;
