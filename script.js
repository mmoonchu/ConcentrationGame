const images = [];
class image {
    constructor(name, link, state = dormant) {
        this.name = name,
        this.link = link,
        this.gridID = 0, // gridID will double as shorthand for both its images index as well as its ID within the DOM
        this.state = state
    }
    // maybe: method for moving on screen (difficulty)
}
// image state variables
const dormant = -1;
const selected = 1;
const secured = 0;

const animals = [
    new image('giraffe', '/image-sets/animals/giraffe.jpg'),
    new image('lion', '/image-sets/animals/lion.jpg')
];

const activeSet = [];
const setActiveSet = function(set) {
    let doubledSet = [];
    set.forEach((image) => {
        doubledSet.push(image, Object.assign(Object.create(image), image))
    })
    for (let i = 0, j = doubledSet.length; i < j; i++) {
        let randomImageIndex = getRandomInt(doubledSet.length);
        activeSet.push(doubledSet[randomImageIndex]);
        doubledSet.splice(randomImageIndex, 1);
    }
    activeSet.forEach((image, index) => {
        image.gridID = index;
    });
    return activeSet;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

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
    let divCounter = 0;
    activeSet.forEach((image) => {
        let newDiv = document.createElement(`div`);
        newDiv.id = `grid${divCounter}`;
        newDiv.innerHTML = `<img src="${image.link}" />`
        document.querySelector('#board').append(newDiv);
        divCounter++;
    });
}
// Function: initiate active player's turn
const setActivePlayer = function(player) { // for both beginGame() & resetGame()
    //TODO
}

////////////////////////////////////////////
// BEGIN:
const beginGame = function() {
    setActiveSet(animals);
    createBoard();
    assignImages();
    setActivePlayer(player1);
}


//     Event listener('click'): flip function x2
//     if (win)
//         win card pair()
//     else
//         fail card pair()

// beginGame();