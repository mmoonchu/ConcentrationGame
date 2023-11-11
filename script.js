const images = [];
class image {
    constructor(name, link) {
        this.name = name,
        this.link = link,
        this.gridID = 0 // gridID will double as shorthand for both its images index as well as its ID within the DOM
    }
    // maybe: method for moving on screen (difficulty)
}

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

const updateClickableCards = function() {
    // const allCards = [...document.querySelectorAll('.card-container')]
    // allCards.forEach((card) => {
    //     card.removeEventListener('click', () => revealCard(card.id))
    // })
    const facedownCards = [...document.querySelectorAll('.face-down')]
    facedownCards.forEach((card) => {
            card.addEventListener('click', () => {
                flipCard(card.id);
            })
            card.setAttribute('state', 'dormant');
    })
}
const flipCard = function(gridID) {
    // TODO
    console.log(`clicked`);
    card = document.querySelector(`#${gridID}`);
    if (card.getAttribute('state') === 'dormant') {
        flipUp(card);
    } else if (card.getAttribute('state') === 'selected') {
        flipDown(card);
    }
    const selectedCards = [...document.querySelectorAll('div[state="selected"')];
    if (selectedCards.length >= 2) {
        console.log(`>= 2 cards picked!`);
        // win pair if matching
        if ((selectedCards[0].getAttribute('name') === selectedCards[1].getAttribute('name'))) {
            // console.log(selectedCards[0].getAttribute('name'));
        } else {
        // flip down if not
            selectedCards.forEach((card) => {
                // console.log(card);
            })
        }
    }

    function flipUp(card) {
        card.classList.toggle('face-down');
        card.classList.toggle('face-up');
        card.setAttribute('state', 'selected');
    }
    function flipDown(card) {
        card.classList.toggle('face-down');
        card.classList.toggle('face-up');
        card.setAttribute('state', 'dormant');
    }
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