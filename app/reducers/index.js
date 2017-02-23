import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import posts from './posts'

const todoApp = combineReducers({
  todos,
  posts,
  visibilityFilter
})

export default todoApp