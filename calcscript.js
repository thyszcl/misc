const inp = document.querySelector('.calcDisp')

function appendToInput(val){
    inp.value += val;
}
function clearDisp(){
    inp.value = ''
}
function equate(){
    try{inp.value = eval(inp.value)}
    catch(error){inp.value="Error"}
        
}