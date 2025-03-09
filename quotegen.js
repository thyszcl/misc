const quote = document.querySelector(".quote")
author = document.querySelector(".name")
quoteButton = document.querySelector(".newquote")
speechButton = document.querySelector(".speech")
copyButton = document.querySelector(".copy")
synth = speechSynthesis;

function quoteGen(){
    
    fetch('https://dummyjson.com/quotes/random').then(response => response.json()).then(result => {
        quote.innerText = result.content;
        author.innerText = `~ ${result.author}`;
    });
}
quoteButton.addEventListener("click", quoteGen);


speechButton.addEventListener("click", ()=>{
    let utterance = new SpeechSynthesisUtterance(`${quote.innerText} by ${author.innerText}`);
    synth.speak(utterance);
    
});


copyButton.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quote.innerText);
});


