import clone from 'clone'

module.exports = (state, action) => {
  const newState = clone(state)
  switch (action.type) {
    case 'ADD_NUMBER':
      newState.numbers.push(action.payload)
      return newState
    case 'CLEAR_NUMBERS':
      newState.numbers.splice(0, newState.numbers.length)
      return newState
    default:
      return newState
  }
}
