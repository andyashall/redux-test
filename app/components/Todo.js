import React, { PropTypes } from 'react'
import ta from 'timeago.js'
import style from './Todo.css'

const getTime = (time) => {
	return ta().format(time)
}

const Todo = ({ onClick, completed, text, username }) => (
  <li className={style.list}>
    <div className={style.tick} style={{color: completed ? 'green' : 'grey'}} onClick={onClick}>done</div>
    <div style={{display: "table-cell"}}>
    	<p className={style.p} style={{textDecoration: completed ? 'line-through' : 'none'}} contentEditable={"true"}>{text}</p>
    	<div style={{color: 'rgba(0,0,0,.6)', fontSize: ".8rem"}}>{getTime(username)}</div>
    </div>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

export default Todo
