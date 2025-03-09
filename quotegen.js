const quoteText = document.querySelector(".quote")
quoteButton = document.querySelector(".newquote")
speechButton = document.querySelector(".speech")
copyButton = document.querySelector(".copy")
authorName = document.querySelector(".name")

synth = speechSynthesis;

function randomQuote(){
    
    fetch("http://api.quotable.io/random").then(response => response.json()).then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = `~ ${result.author}`;
    });
}
quoteButton.addEventListener("click", randomQuote);


speechButton.addEventListener("click", ()=>{
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    synth.speak(utterance);
    
});


copyButton.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});


