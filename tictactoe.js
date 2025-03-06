let currentPlayer = 'X'
const statusbar = document.querySelector('.stats')
statusbar.innerHTML = `${currentPlayer}'s turn`          

const tiles = document.querySelectorAll('.cellBox')
tiles.forEach((tile)=>{
    tile.addEventListener('click', dispPlay)        //adds event listener to all tiles through for each method
})
buttons = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
winConditions = [
    ['0', '1', '2'],     
    ['3', '4', '5'],
    ['6', '7', '8'],
    ['0', '3', '6'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['0', '4', '8'],                           
    ['2', '4', '6']
]

function checkTie(){
    count = 0 
    buttons.forEach((index)=>{
        if(document.getElementById(index).textContent != ''){
            count += 1
            console.log(count)
        }
        if (count == 9){
            statusbar.innerHTML=`Its a tie!`
        }
    })
}


function winChecker(){                                                          //|| is not operator
    winConditions.forEach((array)=>{
        if(document.getElementById(array[0]).textContent != '' || document.getElementById(array[1]).textContent != '' || document.getElementById(array[2]).textContent != ''){
            if(document.getElementById(array[0]).textContent === document.getElementById(array[1]).textContent && document.getElementById(array[1]).textContent === document.getElementById(array[2]).textContent){
                statusbar.innerHTML=`${document.getElementById(array[0]).textContent} wins!`
                tiles.forEach((tile)=>{tile.innerHTML=`${document.getElementById(array[0]).textContent}`})}        //when establishing condtion for if statement do not use 3 consecutive ===
            }                                                                                                      //instead do this: x === y && y === z
        else{}
})}

function dispPlay(){
    selectedCell= document.getElementById(this.id)                             //in this case this refers to the tile/cell that is clicked
    if (currentPlayer === 'X')   
        {if(selectedCell.innerText ===''){
            selectedCell.innerText = `${currentPlayer}`                       
            currentPlayer = 'O'                                                //after each move change player
            statusbar.innerHTML = `${currentPlayer}'s turn`
            checkTie()
            winChecker()
                                                                   //after each move is made winChecker() is called, if it returns true, game is stopped and winner is announced
}}        
    else if (currentPlayer === 'O')
        {if(selectedCell.innerText ===''){
            selectedCell.innerText = `${currentPlayer}`
            currentPlayer = 'X'
            statusbar.innerHTML = `${currentPlayer}'s turn`
            checkTie()                                                //run checktie before winchecker
            winChecker()
            
}}}

const resetButton = document.getElementById('reset')
resetButton.addEventListener('click', restart)                               // when putting in fuctions for addEventListener do NOT put (), if you need to pass in a argument for the function,            
                                                                             // define the argument at the start of the function using operators like 'this': example in dispPlay function                                                                   
function restart(){
    currentPlayer = 'X'
    statusbar.innerHTML = `${currentPlayer}'s turn`       
    tiles.forEach((tile)=>{tile.innerHTML = ''}
    )
}












