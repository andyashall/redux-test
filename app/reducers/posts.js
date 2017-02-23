const initialState = {
	posts: {}
}

const post = (state = {}, action) => {
	switch (action.type) {
		// this gets the posts if there arent any already
		case 'GET_POSTS':
			var expires = new Date();
			expires.setMinutes(expires.getMinutes() + 10);
			return {
				expires: expires,
				data: action.data.docs
			}
		//this gets more posts and adds them to the state.posts.data
		case 'MORE_POSTS': 
			var newData = action.allData.prev.data.concat(action.allData.new.docs)
			console.log(action)
			return {
				expires: action.allData.prev.expires,
				data: newData
			}
		case 'REMOVE_POSTS': 
			return {
				userId: "",
				username: "",
				email: ""
			}
		default:
			return state
	}
}

const posts = (state = [], action) => {
  switch (action.type) {
    case 'GET_POSTS':
    	return post(undefined, action)
    case 'MORE_POSTS':
    	return post(undefined, action)
    default:
      return state
  }
}

export default posts