import api from './index';
import { apiKey, baseUrl } from './config';

export default {
  configuration: {
    getApiConfig: () =>
      api({
        method: 'GET',
        url: `${baseUrl}/configuration?api_key=${apiKey}`,
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
    getMoviesSimilar: (id) =>
      api({
        method: 'GET',
        url: `${baseUrl}/movie/${id}/similar?api_key=${apiKey}`,
      }),
    getMoviesByGenre: (id, page = 1) =>
      api({
        method: 'GET',
        url: `${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=${id}&page=${page}`,
      }),
    searchMovie: (query = '') =>
      api({
        method: 'GET',
        url: `${baseUrl}/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1`,
      }),
  },
  person: {
    getPersonDetails: (id) =>
      api({
        method: 'GET',
        url: `${baseUrl}/person/${id}?api_key=${apiKey}&language=en-US`,
      }),
    getPersonMovies: (id) =>
      api({
        method: 'GET',
        url: `${baseUrl}/person/${id}/movie_credits?api_key=${apiKey}&language=en-US`,
      }),
  },
};
