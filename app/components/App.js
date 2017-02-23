import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Head from './Header.js'

const App = () => (
  <div>
  	<Head />
  	<div>
    	<AddTodo />
    	<VisibleTodoList />
    	<Footer />
    </div>
  </div>
)

export default App
