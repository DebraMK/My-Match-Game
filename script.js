// flip 2 cards and check for match
// if match, keep face up, else unflip
// flip only 2 cards at a time  and no double clicks
// timer start on 1st click, stop when all cards matched
// reset game or new game button

const cards = document.querySelectorAll('.card');
const container = document.getElementsByClassName('container');
let flippedCard = false;
let freezeState = false;
var numberPairs = 12;
let cardOne, cardTwo;
let [milliseconds, seconds, minutes] = [0,0,0];
let timer = document.querySelector('.timeDisplay');
var stoptime = true;


// addEventListener = when player clicks on card, it flips and displays a symbol


function flipCard() {
    if (freezeState) return;
    this.classList.toggle('flip');
    if(!flippedCard){
        flippedCard = true;
        cardOne = this;
    } 
    else {
        flippedCard = false;
        cardTwo = this;
        checkMatch();
    }
   
}
    
// check if cards match
function checkMatch(){
    
    if(cardOne.dataset.imagefront === cardTwo.dataset.imagefront){
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
    }
    else {
        freezeState = true;
        setTimeout(() => {
            cardOne.classList.remove ('flip');
            cardTwo.classList.remove ('flip'); 
            freezeState = false;
        }, 1000);
        
    }
}

// shuffle cards
function shuffle(){
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 23);
        card.style.order=randomPos;
    })
}

cards.forEach(card => card.addEventListener("click", flipCard));

// when 1st card flipped, start timer. 
// stop timer when all cards matched.
function startTimer(){

}

function stopTimer(){

}

// function timerReset(){
//     timer.innerHTML = "00:00:000";
//     stoptime = true;
//     hr = 0;
//     sec = 0;
//     min = 0;
// }


shuffle()