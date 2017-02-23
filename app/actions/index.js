let nextTodoId = 0
export const addTodo = (text, username) => {
  let data = {
    text: text,
    username: username
  }
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    data
  }
}

export const getPosts = (data) => {
  return {
    type: 'GET_POSTS',
    data
  }
}

export const morePosts = (prevData, data) => {
  var allData = {
    prev: prevData,
    new: data
  }
  return {
    type: 'MORE_POSTS',
    allData
  }
}


export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}