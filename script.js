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
    sec: 0,
    min: 0,
    hr: 0,
}
var stoptime = true;

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
        numberPairs--;
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
        displayTime()  
    }
}

function stopTimer(){
    if(numberPairs === 0)
    stoptime=true;
    displayTime()
}

function displayTime(){

    let timerElement = document.getElementsByClassName("timeDisplay");
    sec+=1;
    if(sec == 60){
        sec = 0;
        min++;
        if(min == 60){
            hr++;
        }
    }
    // if (sec <10){
    //     second = "0"+ sec;
    // }
    // if (min <10){
    //     minute = "0"+ min;
    // }    
    // if (hr <10){
    //     hour = "0"+ hr;
    // }
    
    timerElement.innerHTML = hr + ":" + min + ":" + sec;
}

// reset game or new game button
function refreshPage(){
    window.location.reload();
}


shuffle()
