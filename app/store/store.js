import { createStore } from 'redux'
import todoApp from '../reducers/index.js'

const store = createStore(todoApp)

export default store