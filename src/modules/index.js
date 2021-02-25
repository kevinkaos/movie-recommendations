import { combineReducers } from 'redux'
import counter from './counter'
import reducers from './reducers'
import movies from './movies'

export default combineReducers({
  counter,
  reducers,
  movies,
})
