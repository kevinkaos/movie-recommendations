import { combineReducers } from 'redux'
import counter from './counter'
import reducers from './reducers'

export default combineReducers({
  counter,
  reducers,
})
