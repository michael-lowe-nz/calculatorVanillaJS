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
  renderState(getState())
})

dispatch({type: 'INIT'})

function renderState (state) {
  renderView(state.numbers)
}

function renderView (numbers) {
  document.getElementById('values').innerHTML = ""
  if (numbers) {
    numbers.forEach((number, index) => {
      const numberList = document.getElementById('values')
      const newElement = document.createElement('li')
      const content = document.createTextNode(number)
      newElement.appendChild(content)
      newElement.innerHTML += `<span id="remove${index}">x</span>`
      newElement.addEventListener('click', function() {
        console.log('clicked delete')
        dispatch({
          type: 'REMOVE_NUMBER',
          payload: index
        })
      })
      numberList.insertBefore(newElement, numberList.firstChild)
    })
    document.getElementById('current').innerHTML = sumOfArray(numbers)
  } else {
    document.getElementById('current').innerHTML = ""
  }
}

function handleSubmit (e) {
  e.preventDefault()
  if (!isNaN(getInputValue()) && getInputValue()) {
    dispatch({type: 'ADD_NUMBER', payload: getInputValue()})
  }
  setInput("")
}

function handleClear (e) {
  e.preventDefault()
  dispatch({type: 'CLEAR_NUMBERS'})
  setInput("")
}

function handleRemove(e) {
  console.log('removing node')
}

function setInput (str) {
  document.getElementById('input').value = str
}
