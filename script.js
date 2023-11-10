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
const updateClickableCards = function() {
    // const allCards = [...document.querySelectorAll('.card-container')]
    // allCards.forEach((card) => {
    //     card.removeEventListener('click', () => revealCard(card.id))
    // })
    const facedownCards = [...document.querySelectorAll('.face-down')]
    facedownCards.forEach((card) => {
        // if (!(card.getAttribute('listener') === 'true')) {
            card.addEventListener('click', () => {
                revealCard(card.id);
            })
            card.setAttribute('listener', 'true'); // edit this
        // }
    })
}
const revealCard = function(gridID) {
    // TODO
    console.log(`clicked`);
    card = document.querySelector(`#${gridID}`);
    if (card.getAttribute('listener') === 'true') {
        card.classList.toggle('face-down');
        card.classList.toggle('face-up');
        card.setAttribute('listener', 'false');
        console.log(`made false`);
    }
    // updateClickableCards();
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

// Function: assign images to divs (may not need)
const createCardFace = function(image) {
    //TODO
    let cardFaceDiv = document.createElement(`div`);
    cardFaceDiv.classList.add('card-front');
    cardFaceDiv.id = `${image.gridID}`; // could refactor to eliminate gridID within face
    cardFaceDiv.setAttribute('name', `${image.name}`);
    cardFaceDiv.innerHTML = `<img src="${image.link}" />`;
    return cardFaceDiv;
}
//Function: containerize image for board
const containerizeImage = function(cardFace) {
    let cardContainer = document.createElement(`div`);
        cardContainer.id = `grid${cardFace.id}`;
        cardContainer.classList.add('card-container', 'face-down');
        cardContainer.setAttribute('name', `${cardFace.getAttribute('name')}`);
    let card = document.createElement(`div`);
        card.classList.add('card');
    let cardBack = document.createElement(`div`);
        cardBack.classList.add('card-back');
    card.append(cardFace, cardBack);
    cardContainer.append(card);
    return cardContainer;
}
//Function: create image divs
const createBoard = function() {
    activeSet.forEach((image) => {
        const card = containerizeImage(createCardFace(image));
        document.querySelector('#board').append(card);
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
    // setActivePlayer(player1);
    updateClickableCards();
}
// updateClickableCards();

//     Event listener('click'): flip function x2
//     if (win)
//         win card pair()
//     else
//         fail card pair()

beginGame();