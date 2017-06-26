module.exports = () => {
  var number = document.getElementById('input').value
  return number ? Number(number) : null
}
