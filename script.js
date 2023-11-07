// Create array of images
//     image class = {
//         name
//         imageID (corresponds to position in grid)
//         url

//         maybe: method for moving on screen
//     }
// Function: flip over (reveal) card
// Function: flip over (hide) card
// Function: (re)move card pair from pile
// Function: switch active player
// Function: checkWin
//     - textContent: active player wins!

// Function: win card pair
//     (re)move card pair()
//     active player score++
//     checkWin()
// Function: incorrect card pair
//     hide cards()
//     switch active player()

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
    constructor(name, href, active = true) {
        this.name = name,
        this.href = href
        this.gridID = images.indexOf(this), // gridID will double as shorthand for both its images index as well as its ID within the DOM
        this.active = active
    }

    // maybe: method for moving on screen (difficulty)
}

// Function: flip over (reveal) card
const revealCard = function(cardName) {
    // TODO
}
// Function: flip over (hide) card
const hideCards = function() {
    images.forEach((image) => {
        if (image.active === true) {
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
    //     - textContent: active player wins!
}