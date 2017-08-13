import { createStore } from 'redux'
import reducer from './reducers/reducer'
import './scss/index.scss'

import sumOfArray from './lib/sumOfArray'
import getInputValue from './lib/getInputValue'

document.getElementById('form').addEventListener('submit', handleSubmit)
document.getElementById('clear').addEventListener('click', handleClear)

const initialState = {
  numbers: []
}

const { subscribe, dispatch, getState } = createStore(reducer, initialState)

subscribe(() => {
  const state = getState()
  renderState(state)
})

dispatch({type: 'INIT'})

function renderState (state) {
  renderView(state.numbers)
}

function renderView (numbers) {
  document.getElementById('values').innerHTML = ""
  if (numbers) {
    numbers.forEach((number) => {
      const numberList = document.getElementById('values')
      const newElement = document.createElement('li')
      const content = document.createTextNode(number)
      newElement.appendChild(content)
      numberList.insertBefore(newElement, numberList.firstChild)
    })
    document.getElementById('current').innerHTML = sumOfArray(numbers)
  } else {
    document.getElementById('current').innerHTML = ""
  }
}

function handleSubmit (e) {
  e.preventDefault()
  dispatch({type: 'ADD_NUMBER', payload: getInputValue()})
  setInput("")
}

function handleClear (e) {
  e.preventDefault()
  dispatch({type: 'CLEAR_NUMBERS'})
  setInput("")
}

function setInput (str) {
  document.getElementById('input').value = str
}

// function renderSum (n) {
//   document.getElementById('current').innerHTML = n
// }

function createNumberListEl (n) {
  const newElement = document.createElement('li')
  const content = document.createTextNode(n)
  newElement.appendChild(content)
  return newElement
}
