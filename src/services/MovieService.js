import { fetchMovie, fetchTranslation } from "../util/apiConnect.js";

class MovieService {
  static async getMovieInfo (movieName) {
    const movie = await fetchMovie(movieName);
    return movie;
  }

  static async getTranslation(movieInfo) { 
    const translated = await fetchTranslation(movieInfo.plot);    
    return translated.translatedText;
  }
}

export default MovieService;
