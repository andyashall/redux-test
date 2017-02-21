import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text, username }) => (
  <div>
  <li onClick={onClick} style={{textDecoration: completed ? 'line-through' : 'none'}} >
    {text}
  </li>
  <div style={{color: 'rgba(0,0,0,.6)'}}>{username}</div>
  </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

export default Todo
