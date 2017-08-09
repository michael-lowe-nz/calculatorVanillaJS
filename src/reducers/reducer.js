const reducer = (state, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case 'ADD_NUMBER':
      newState.numbers.push(action.payload)
      return newState
    default:
      return newState
  }
}

export default reducer
