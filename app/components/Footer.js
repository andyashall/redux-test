import React from 'react'
import FilterLink from '../containers/FilterLink'
import style from './Footer.css'

const Footer = () => (
  <div className={style.selector}>
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </div>
)

export default Footer
