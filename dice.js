const userinput = document.getElementById('numberselector')
const rollButt = document.getElementById('roll')
const statusbar = document.getElementById('statusbar')
const diceContainer = document.getElementById('diceContainer')

userinput.defaultValue = "1"

rollButt.addEventListener('click',roll)
diceOutcomes = []
function roll(){
    diceOutcomes.splice(0, diceOutcomes.length)                //clears diceOutcomes array so that new values are shown each time button is pressed
    const diceNo = userinput.value
    let i = 0
    while(i<diceNo){
        const value = Math.floor(Math.random() * (6) + 1)      //Math.random() * (max - min) + min
        diceOutcomes.push(value)
        i+=1
    }
    statusbar.innerHTML = `the dice outcomes were ${diceOutcomes}`

    let htmlcode = ''
    diceOutcomes.forEach((no)=>{
        htmlcode += `<img src="dice${no}.png">`
    })
    diceContainer.innerHTML = htmlcode
   }