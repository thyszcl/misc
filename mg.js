const cards = document.querySelectorAll('.card')
let clickCount = 0
let id = []                                                   // array that stores data-id attribute value of selected elements -- used to check if values/tiles match 
let matched = 0
const stats = document.getElementById('stats')
const resetButton = document.getElementById('reset')

function shuffle(){                                 
    cards.forEach(card => {                                                  
        let pos = Math.floor(Math.random() * 12);       
        card.style.order = pos
    })
}

shuffle()                                                    // once site is loaded shuffle() is auto called and tiles are shuffled

function checkMatch(){                                       // Once a tile is selected, its data-id attribute value is added to id[], if length of id[] is == 2, check match will be called
    if (id[0] == id[1]){                                     // if id[0] == id[1], tiles match (return true) if not tiles do not match (return false)
        return true
    }else{return false}
}


cards.forEach(card=>{
    card.addEventListener('click', ()=>{                                                    
        if (card.hasAttribute('open') || id.length >= 2) return;            // if card is already clicked or id array length >= 2 (2 cards have already been clicked), return -- ignores clicks on already flipped cards or clicks after 2 cards have already been opened --if not  a player can click the same card twice, and it will be counted as a match.
        card.innerHTML = card.getAttribute('data-id');                      // sets innerHTML to data-id to let user see value of tile they've clicked
        id.push(card.innerHTML)                                             // adds id value to id array to be checked
        card.setAttribute('open', 'true')                                   // adds open = true attribute to card, makes it so that we can differentiate open cards from not open cards
        clickCount += 1                                                     // +1 to clickCount, if cc is 2 checkMatch is called and values in id array are checked. if cc = 1, prog waits for second tile to be selected
        
        if (clickCount == 2){
            let result = checkMatch()    
            clickCount = 0
            if (result == false){                                          // result = false -- tiles dont match
                id = []                                                    // id array is cleared
                setTimeout(()=>{document.querySelectorAll('[open="true"]').forEach((card)=>{card.innerHTML='';card.removeAttribute('open', 'true')})},100)  //access all open tiles via their open=true attribute, remove their innerHTML and open attribute
            }else{                                                    // result = true -- tiles match
                id = []                                               // clear id array
                document.querySelectorAll('[open="true"]').forEach((card)=>{card.removeAttribute('open', 'true');card.replaceWith(card.cloneNode(true))})  // access open tiles by open=true attribute -- remove open attribute and replace card with cloneNode so that they cannot be clicked anymore
                matched += 2
                stats.innerHTML = `Matched: ${matched}`
            }
        }
        if (matched == 16){
            stats.innerHTML = 'You win!!!'
        }
    })
})

resetButton.addEventListener('click', ()=>{
    location.reload();
})

