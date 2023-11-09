const images = [];
class image {
    constructor(name, link, state = dormant) {
        this.name = name,
        this.link = link,
        this.gridID = images.indexOf(this), // gridID will double as shorthand for both its images index as well as its ID within the DOM
        this.state = state
    }
    // maybe: method for moving on screen (difficulty)
}
// create activeSet
//     setClone = images.slice()
//     setClone.forEach
//         push random image to activeSet
//         splice image out of setClone
//         reduce randomInt() arg by 1
const activeSet = [];
const setActiveSet = function(set) {
    let doubledSet = set.concat(set);
    for (let i = 0, j = doubledSet.length; i < j; i++) {
        let randomImageIndex = getRandomInt(doubledSet.length);
        activeSet.push(doubledSet[randomImageIndex]);
        doubledSet.splice(randomImageIndex, 1);
    }
    activeSet.forEach(image => {
        image.gridID = activeSet.indexOf(this);
    });
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
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

// Function: randomly assign images to divs (may not need)
const assignImages = function() {
    //TODO
}
//Function: create image divs
const createBoard = function() {
    activeSet.forEach((image) => {
        let newDiv = document.createElement(`div`);
        newDiv.id = `grid${image.gridID}`;
        newDiv.innerHTML = `<img src="${image.link} />"`
        document.querySelector('#board').append(newDiv);
    });
}
// Function: initiate active player's turn
const setActivePlayer = function(player) { // for both beginGame() & resetGame()
    //TODO
}

////////////////////////////////////////////
// BEGIN:
const beginGame = function() {
    assignImages();
    setActivePlayer(player1);
}


//     Event listener('click'): flip function x2
//     if (win)
//         win card pair()
//     else
//         fail card pair()