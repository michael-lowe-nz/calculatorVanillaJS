module.exports = (state, action) => {
  switch (action.type) {
    case 'ADD_NUMBER':
      return Object.assign({}, state, {
        numbers: [
          ...state.numbers, action.payload
        ]
      })
    case 'CLEAR_NUMBERS':
      return Object.assign({}, {numbers:[]})
    default:
      return state
  }
}
