import React, { PropTypes } from 'react'
import style from './Link.css'

const Link = ({ active, children, onClick }) => {
  let buttClass;
  // if (active) {
  //   buttClass = style.a
  //   return <span className={style.a}>{children}</span>
  // } else {
  //   buttClass= style.not
  // }

  return (
    <div className={style.selection + (active ? " " + style.a : " " + style.not)}
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      {children}
    </div>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
