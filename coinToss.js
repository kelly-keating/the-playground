
var readline = require('readline')

var tosses = []
var heads = 0
var tails = 0


function coinToss() {
  var next = Math.random() < 0.5 ? 'H' : 'T'
  next === 'H' ? heads++ : tails++
  tosses.push(next)
  score()
}

function score() {
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  console.log(tosses + "\nHeads: " + heads + ", Tails: " + tails)
  askAnother(rl)
  .then((another) => {
    if(another !== 'N') {
      console.log("Another coin!"); //all non-matching answers will be embraced as assent by our enthusiastic coin tosser
      coinToss()
    }
  })
  rl.close()
}

function askAnother(rl) {
  return new Promise ((resolve, reject) => {

    rl.question('Another? (Y/N)\n', (ans) => {
      ans.toUpperCase()
      resolve(ans)
    })
  })
}

coinToss()
