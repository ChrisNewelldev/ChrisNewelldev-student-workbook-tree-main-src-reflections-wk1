let winConditions = []

winConditions['paper'] = 'rock'
winConditions['rock'] = 'scissors'
winConditions['scissors'] = 'paper'

function computerChoice(){
  let choice = Math.floor(Math.random()*(3)+1)
  switch(choice){
    case 1:
      return 'paper'
    case 2:
      return 'scissors'
    case 3:
      return 'rock'
  }
}
function play(playerChoice){
let cpChoice = computerChoice()
if (playerChoice == winConditions[cpChoice]){
  console.log('player wins')
}
else if (playerChoice === cpChoice){
  console.log('draw')
}
else {console.log('computer wins')}
}
//play()






