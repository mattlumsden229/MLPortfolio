function rockPaperScissors(){
    let random = Math.random()
    if(random < .33){
        return 'rock'
    }else if(random < .66){
        return 'paper'
    }else{
        return 'scissors'
    }
}

document.querySelector('button').addEventListener('click', winLoseDraw)

function winLoseDraw(){
    let playerChoice = document.querySelector('input').value
    document.querySelector('h2').innerText = ''
    let botChoice = rockPaperScissors()
    if((playerChoice === 'rock' && botChoice === 'scissors') || (playerChoice === 'paper' && botChoice === 'rock') || (playerChoice === 'scissors' && botChoice === 'paper')){
        document.querySelector('h2').innerText = 'YOU WIN'
    }else if(playerChoice === botChoice){
        document.querySelector('h2').innerText = 'DRAW'
    }else{
        document.querySelector('h2').innerText = 'YOU LOSE'
    }
    event.preventDefault()
}