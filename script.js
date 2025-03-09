const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector(".newquote"),
authorName = document.querySelector(".name"),
speechBtn = document.querySelector(".speech"),
copyBtn = document.querySelector(".copy"),
synth = speechSynthesis;

function randomQuote(){
    
    fetch("http://api.quotable.io/random").then(response => response.json()).then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = `~ ${result.author}`;
    });
}
quoteBtn.addEventListener("click", randomQuote);


speechBtn.addEventListener("click", ()=>{
    if(!quoteBtn.classList.contains("loading")){
        let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
        synth.speak(utterance);
        setInterval(()=>{
            !synth.speaking ? speechBtn.classList.remove("active") : speechBtn.classList.add("active");
        }, 10);
    }
});


copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});


