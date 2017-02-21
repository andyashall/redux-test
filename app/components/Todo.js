import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text, username }) => (
  <li style={{textDecoration: completed ? 'line-through' : 'none'}} >
    <input type="checkbox" onClick={onClick} />
    <span contentEditable={"true"}>{text}</span>
    <div style={{color: 'rgba(0,0,0,.6)'}}>{username}</div>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

export default Todo
