import './index.scss'

import sumOfArray from './lib/sumOfArray'
import getInputValue from './lib/getInputValue'

document.getElementById('form').addEventListener('submit', handleSubmit)
document.getElementById('clear').addEventListener('click', handleClear)

let numbers = []

function handleSubmit (e) {
  e.preventDefault()
  if (getInputValue()) {
    numbers.push(getInputValue())
    var newElement = createNumberListEl(getInputValue())
    var numberList = document.getElementById('values')
    numberList.insertBefore(newElement, numberList.firstChild)
    renderSum(sumOfArray(numbers))
  }
  setInput("")
}

function handleClear (e) {
  e.preventDefault()
  numbers = []
  const node = document.getElementById('values')
  while (node.hasChildNodes()) {
    node.removeChild(node.lastChild)
  }
  renderSum(0)
  setInput("")
}

function setInput (str) {
  document.getElementById('input').value = str
}


function renderSum (n) {
  document.getElementById('current').innerHTML = n
}

function createNumberListEl (n) {
  const newElement = document.createElement('li')
  const content = document.createTextNode(n)
  newElement.appendChild(content)
  return newElement
}
