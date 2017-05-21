console.log('hello')

var numbers = []

document.getElementById('submit').addEventListener('click', function() {
  console.log('clicked')
})

function addNumber () {
  console.log('adding')
  numbers.push(document.getElementById('input').value)
  var htmlNumbers = numbers.map(function (item) {
    "<li>" + item + "</li>"
  })

  // document.getElementById('values').innerHTML = htmlNumbers
  document.getElementById('values').innerHTML = "Hello World"
}
