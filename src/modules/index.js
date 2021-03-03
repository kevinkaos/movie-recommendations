import { combineReducers } from 'redux';
import configs from './configs';
import movies from './movies';
import genres from './genres';
import movieDetails from './movieDetails';
import person from './person';
import { connectRouter } from 'connected-react-router';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    configs,
    movies,
    genres,
    movieDetails,
    person,
  });

export default rootReducer;
