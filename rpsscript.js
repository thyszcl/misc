let compMove = ''
let result = ''
let playerMove = ''
let compScore = Number(localStorage.getItem('cScore'))
let playerScore = Number(localStorage.getItem('pScore'))
const summary = document.querySelector('.summary')

function GenCompMove(){
    let val = Math.random()
    if (val <= 1/3){compMove = 'Rock'}
    else if (val >= 2/3){compMove = 'Paper'}
    else{compMove = 'Scissors'}
}


function rockAct(){
    playerMove = 'Rock'
    GenCompMove()
    if (compMove == 'Rock'){
        result = 'tie'
    }
    if (compMove == 'Paper'){
        result = 'lose'
        compScore +=1
    }
    if (compMove == 'Scissors'){
        result = 'win'
        playerScore +=1
    }
    summary.innerHTML=`You chose ${playerMove}. Computer chose ${compMove},  you ${result}. Computer:${compScore} You:${playerScore}`
    localStorage.setItem('cScore',compScore.toString())
    localStorage.setItem('pScore',playerScore.toString())
}

function paperAct(){
    playerMove = 'Paper'
    GenCompMove()
    if (compMove == 'Rock'){
        result = 'win'
        playerScore +=1
    }
    if (compMove == 'Paper'){
        result = 'tie'
    }
    if (compMove == 'Scissors'){
        result = 'lose'
        compScore +=1
    }
    summary.innerHTML=`You chose ${playerMove}. Computer chose ${compMove}, you ${result}. Computer:${compScore} You:${playerScore}`
    localStorage.setItem('cScore',compScore.toString())
    localStorage.setItem('pScore',playerScore.toString())
}

function scissorAct(){
    playerMove = 'Scissors'
    GenCompMove()
    if (compMove == 'Rock'){
        result = 'lose'
        compScore +=1
    }
    if (compMove == 'Paper'){
        result = 'win'
        playerScore +=1
    }
    if (compMove == 'Scissors'){
        result = 'tie'
    }
    summary.innerHTML=`You chose ${playerMove}. Computer chose ${compMove}, you ${result}. Computer:${compScore} You:${playerScore}`
    localStorage.setItem('cScore',compScore.toString())
    localStorage.setItem('pScore',playerScore.toString())
}



const rockB = document.querySelector('.rock')
const paperB = document.querySelector('.paper')
const scissorB = document.querySelector('.scissor')
const resetB = document.querySelector('.resetB')

rockB.addEventListener('click',rockAct)
paperB.addEventListener('click',paperAct)
scissorB.addEventListener('click',scissorAct)
resetB.addEventListener('click', ()=>{
    playerScore=0
    compScore=0
    summary.innerHTML=`Score has been reset. Computer:${compScore} You:${playerScore}`
})
