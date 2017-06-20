document.getElementById('submit').addEventListener('click', addNumber)

var numbers = []

function addNumber () {
  if (getNumber()) {
    numbers.push(getNumber())
    var newElement = createNumberListEl(getNumber())
    document.getElementById('values').appendChild(newElement)
    attachSum(sumOfArray(numbers))
  }
}

function attachSum (n) {
  document.getElementById('current').innerHTML = n
}

function getNumber () {
  number = document.getElementById('input').value
  if (number !== null) {
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

function sumOfArray (arr) {
  return arr.reduce(function(previous, current){
    return previous + current
  },0)
}
