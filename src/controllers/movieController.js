class MovieController {

  static async getMoviePlot (req, res) {
    const movieName = req.query.movie;
    try {
      // aqui retornamos o plot traduzido
      const moviePlot = movieName;
      res.status(200).json(moviePlot);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
};

export default MovieController;
