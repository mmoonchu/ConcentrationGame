// BEGIN:
// Function: randomly assign images to divs
// Function: initiate active player's turn
//     Event listener('click'): flip function x2
//     if (win)
//         win card pair()
//     else
//         incorrect card pair()

const images = [];
class image {
    constructor(name, href, state = dormant) {
        this.name = name,
        this.href = href
        this.gridID = images.indexOf(this), // gridID will double as shorthand for both its images index as well as its ID within the DOM
        this.state = state
    }
    // maybe: method for moving on screen (difficulty)
}
// image state variables
const dormant = -1;
const selected = 1;
const secured = 0;

// Function: flip over (reveal) card
const revealCard = function(cardName) {
    // TODO
}
// Function: flip over (hide) card
const hideCards = function() {
    images.forEach((image) => {
        if (image.state === dormant) {
            // TODO
        }
    })
}
// Function: (re)move card pair from pile
const removeCardPair = function(cardName) {
    // TODO
}
// Function: switch active player
const switchPlayer = function() {
    // TODO
}
// Function: checkWin
const checkWin = function () {
    // TODO
    // - textContent: active player wins!
}
// Function: win card pair
const winCardPair = function(cardName) {
    removeCardPair(cardName);
    // active player score++
    checkWin();
}
// Function: incorrect card pair
const failCardPair = function() {
    hideCards();
    switchPlayer();
}
