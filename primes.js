
function countPrimesTo(max) {
  var primes = []
  if(max < 1) console.log('cmon dude, we\'re talking nice, normal, positive integers here');
  else if(max < 2) console.log('1 isn\'t really a prime');
  else{
    console.log('2')
    primes.push(2)
    for(var i = 3; i < max; i++){
      if(isPrime(primes, i)){
        console.log(i)
        primes.push(i)
      }
    }
  }
}

function isPrime(arr, int) {
  var prime = true
  arr.forEach(function(elem) {
    if(int%elem === 0){
      prime = false         //cannot return from here?
    }
  })
  return prime
}

countPrimesTo(500)

module.exports = {
  countPrimesTo
}
