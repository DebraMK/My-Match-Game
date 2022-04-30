// flip 2 cards and check for match
// if match, keep face up, else unflip
// flip only 2 cards at a time  and no double clicks
// timer start on 1st click, stop when all cards matched

const cards = document.querySelectorAll('.card');
const container = document.getElementsByClassName('container');
let flippedCard = false;
let freezeState = false;
var numberPairs = 12;
let cardOne, cardTwo;
var timer = { 
    second: 0,
    minute: 0,
    hour: 0,
}
var stopTime = true;
var startTime = false;

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
        numberPairs --;
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
    if(!startTime){
        startTime = true;  
        countTimer();  
    }
}

function stopTimer(){
    if(numberPairs === 0){
     clearInterval(timerVar)
    }
}


// ANOTHER TIMER TO TRY
var timerVar = setInterval(countTimer, 1000);
var totalSeconds = 0;
function countTimer() {
           ++totalSeconds;
           var hour = Math.floor(totalSeconds /3600);
           var minute = Math.floor((totalSeconds - hour*3600)/60);
           var second = totalSeconds - (hour*3600 + minute*60);
           if(hour < 10)
             hour = "0"+hour;
           if(minute < 10)
             minute = "0"+minute;
           if(second < 10)
             second = "0"+second;
           document.getElementsByClassName("timeDisplay").innerHTML = hour + ":" + minute + ":" + second;
        }

// reset game or new game button
function refreshPage(){
    window.location.reload();
}


shuffle()


