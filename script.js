// const image_input = document.querySelector("#image_input");
// var uploaded_image = "";
// image_input.addEventListener("change".function(){
//     const reader = new File();
//     reader.addEventListener("load", () => {
//         uploaded_image = reader.result;
//         document.querySelector("display_image").style.backgroundImage = 'url($(uploaded_image))';
//     })
//     reader.readAsDataURL(this.files[0]);
// })
// set up cards with 2 same shapes under 2 random cards, 12 shapes for 24 cards.


const cardInner = document.getElementsByClassName("cardInner"); 
    // addEventListener = when player clicks on card, it flips and displays a symbol
cardInner.addEventListener("click", flipCard);  

function flipCard(){
    card.classList.toggle("cardInner");
}

// flipCard()

function countMatches(){
    // when a match is made +1 to count.
    // need disply for count
}

function timer(){
    // when 1st card flipped, start timer. 
    // stop timer when all cards matched.

}