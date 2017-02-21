import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import style from './AddTodo.css'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div className={style.container}>
      <form onSubmit={e => {
        let text = document.getElementById("text").value,
            // username = document.getElementById("username").value;
            username = new Date().toString();
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(text, username))
        input.value = ''
      }}>
      <div className={style.col1}>
        <select id="username" placeholder="username" ref={node => {
          input = node
        }}>
          <option>Andy</option>
        </select>
      </div>
      <div className={style.col2}>
        <input id="text" placeholder="text" ref={node => {
          input = node
        }} />
      </div>
      <div className={style.col3}>
        <button type="submit">
          Add Todo
        </button>
      </div>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
