import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

// store.subscribe(() =>
//   console.log(store.getState())
// )

let Head = ({username}) => (
	<div style={{position: 'fixed', width: '100%', top: 0, height: '50px', 'borderBottom': '1px solid rgba(0,0,0,.08)', 'zIndex': 99, 'backgroundColor': '#fff'}}>
		{username}
	</div>
)

Head.propTypes = {
  username: PropTypes.string.isRequired
}

Head = connect()(Head)

export default Head