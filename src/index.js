import sumOfArray from './lib/sumOfArray'

document.getElementById('form').addEventListener('submit', handleSubmit)
document.getElementById('clear').addEventListener('click', handleClear)


var numbers = []

function handleSubmit (e) {
  console.log('hello there')
  const hello = () => console.log("ES6!!!!")
  hello()
  e.preventDefault()
  if (getNumber()) {
    numbers.push(getNumber())
    var newElement = createNumberListEl(getNumber())
    var numberList = document.getElementById('values')
    numberList.insertBefore(newElement, numberList.firstChild)
    attachSum(sumOfArray(numbers))
  }
  setInput("")
}

function handleClear (e) {
  e.preventDefault()
  numbers = []
  node = document.getElementById('values')
  while (node.hasChildNodes()) {
    node.removeChild(node.lastChild)
  }
  attachSum(0)
  setInput("")
}

function setInput (str) {
  document.getElementById('input').value = str
}


function attachSum (n) {
  document.getElementById('current').innerHTML = n
}

function getNumber () {
  var number = document.getElementById('input').value
  if (number) {
    return Number(number)
  }
  else {
    return null
  }
}

function createNumberListEl (n) {
  var newElement = document.createElement('li')
  var content = document.createTextNode(n)
  newElement.appendChild(content)
  return newElement
}
