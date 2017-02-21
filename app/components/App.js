import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Head from './Header'

const App = () => (
  <div>
  	<Head />
  	<div style={{'marginTop': '80px'}}>
    	<AddTodo />
    	<VisibleTodoList />
    	<Footer />
    </div>
  </div>
)

export default App
