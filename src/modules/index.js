import { combineReducers } from 'redux';
import configs from './configs';
import movies from './movies';
import { connectRouter } from 'connected-react-router';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    configs,
    movies,
  });

export default rootReducer;
