import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import style from './Header.css'

// store.subscribe(() =>
//   console.log(store.getState())
// )

let Head = ({username}) => (
	<div className={style.head}>
		<div className={style.left}>
			◀ Previous Week
		</div>
		<div className={style.middle}>
			Mon 19/02/17
		</div>
		<div className={style.right}>
			Next Week ▶
		</div>
		{username}
	</div>
)

Head.propTypes = {
  username: PropTypes.string.isRequired
}

Head = connect()(Head)

export default Head