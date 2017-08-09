module.exports = (state, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case 'ADD_NUMBER':
      newState.numbers.push(action.payload)
      return newState
    case 'CLEAR_NUMBERS':
      console.log('Newstate', newState)
      newState.numbers.splice(0, newState.numbers.length)
      return newState
    default:
      return newState
  }
}
