// shuffle board
// flip 2 cards and check for match
// if match, keep face up, else unflip
// flip only 2 cards at a time  and no double clicks
// timer start on 1st clip, stop when all cards matched
// reset game or new game button

const cards = document.querySelectorAll('.card');
let flippedCard = false;
let cardOne, cardTwo;
    // addEventListener = when player clicks on card, it flips and displays a symbol
// cardInner.addEventListener("click", flipCard);  

function flipCard() {
    this.classList.toggle('flip');
    if(!flippedCard){
        flippedCard = true;
        cardOne = this;
    } 
    else {
        flippedCard = false;
        cardTwo = this;
    } 
    if(cardOne.dataset.imagefront === cardTwo.dataset.imagefront){
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
    }
    console.log(cardOne.dataset.imagefront);
    console.log(cardTwo.dataset.imagefront);

}

cards.forEach(card => card.addEventListener("click", flipCard));

    

// function flipCard(id){
//     (class1 = id) || (class2 = id) ? front:back
// }
// // check if cards match
// function checkMatch(){
//     if(card1 == null){
//         card1 = id
//     }
//     else if (card2 == null){
//         card2 = id
//     }
//     checkMatch(card1, card2)
// }

// function activeCard(id, cardFace){
//     if(card1 == id || card2 == id){
//         $("#" + id).className = cardFace
//     } else
//         $("#" + id).className = cardBack
// }


function timer(){
    // when 1st card flipped, start timer. 
    // stop timer when all cards matched.

}