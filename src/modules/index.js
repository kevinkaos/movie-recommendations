import { combineReducers } from 'redux';
import counter from './counter';
import reducers from './reducers';
import movies from './movies';
import { connectRouter } from 'connected-react-router';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    counter,
    reducers,
    movies,
  });

export default rootReducer;
