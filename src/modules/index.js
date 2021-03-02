import { combineReducers } from 'redux';
import configs from './configs';
import movies from './movies';
import movieDetails from './movieDetails';
import { connectRouter } from 'connected-react-router';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    configs,
    movies,
    movieDetails,
  });

export default rootReducer;
