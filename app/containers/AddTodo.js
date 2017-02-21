import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        let text = document.getElementById("text").value,
            username = document.getElementById("username").value;
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(text, username))
        input.value = ''
      }}>
        <input id="username" placeholder="username" ref={node => {
          input = node
        }} />
        <input id="text" placeholder="text" ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
