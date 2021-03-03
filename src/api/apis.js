import api from './index';
import { apiKey, baseUrl } from './config';

export default {
  configuration: {
    getApiConfig: () =>
      api({
        method: 'GET',
        url: `${baseUrl}/configuration?api_key=${apiKey}`,
      }),
    getConfigs: (type = 'countries') =>
      api({
        method: 'GET',
        url: `${baseUrl}/configuration/${type}?api_key=${apiKey}`,
      }),
  },
  movie: {
    getMovies: (
      selection = 'popular',
      page = 1,
      language = 'en-US',
      region = 'US'
    ) =>
      api({
        method: 'GET',
        url: `${baseUrl}/movie/${selection}?api_key=${apiKey}&language=${language}&region=${region}&page=${page}`,
      }),
    getMovieDetails: (movieId = 0, language = 'en-US') =>
      api({
        method: 'GET',
        url: `${baseUrl}/movie/${movieId}?api_key=${apiKey}&language=${language}`,
      }),
    getMovieGenres: () =>
      api({
        method: 'GET',
        url: `${baseUrl}/genre/movie/list?api_key=${apiKey}`,
      }),
    getMovieCredits: (id) =>
      api({
        method: 'GET',
        url: `${baseUrl}/movie/${id}/credits?api_key=${apiKey}&language=en-US`,
      }),
    getMovieReviews: (id) =>
      api({
        method: 'GET',
        url: `${baseUrl}/movie/${id}/reviews?api_key=${apiKey}`,
      }),
    getMovieSimilar: (id) =>
      api({
        method: 'GET',
        url: `${baseUrl}/movie/${id}/similar?api_key=${apiKey}`,
      }),
    getMoviesByGenre: (id) =>
      api({
        method: 'GET',
        url: `${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity&page=1&with_genres=${id}`,
      }),
  },
  tv: {
    getTVShows: (
      selection = 'popular',
      page = 1,
      language = 'en-US',
      region = 'US'
    ) =>
      api({
        method: 'GET',
        url: `${baseUrl}/tv/${selection}?api_key=${apiKey}&language=${language}&region=${region}&page=${page}`,
      }),
    getTVDetails: (tvId = 0, language = 'en-US') =>
      api({
        method: 'GET',
        url: `${baseUrl}/tv/${tvId}?api_key=${apiKey}&language=${language}`,
      }),
    getTVGenres: () =>
      api({
        method: 'GET',
        url: `${baseUrl}/genre/tv/list?api_key=${apiKey}&language=en-US`,
      }),
  },
};
