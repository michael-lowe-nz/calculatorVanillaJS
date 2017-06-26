function sumOfArray (arr) {
  return arr.reduce(function(previous, current){
    return previous + current
  },0)
}

module.exports = sumOfArray
