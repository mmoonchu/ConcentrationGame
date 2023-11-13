const player0El = document.querySelector('#player-0');
const player1El = document.querySelector('#player-1');
const score0El = document.querySelector('#score-0');
const score1El = document.querySelector('#score-1');

const scores = [0, 0];
let activePlayer = 0;
let playing = true;

let turnTimeoutValue = 1000;
const dontWait = 0;

class image {
    constructor(name, link) {
        this.name = name,
        this.link = link,
        this.gridID = 0
    }
    flipCard_() {
        flipCard(this.id);
    }
    // maybe: method for moving on screen (difficulty)
}
const animals = [
    new image('giraffe', '/image-sets/animals/giraffe.jpg'),
    new image('lion', '/image-sets/animals/lion.jpg'),
    new image('monkey', '/image-sets/animals/monkey.jpg'),
    new image('penguin', '/image-sets/animals/penguin.png')
];
const animals2 = [
    new image('giraffe', '/image-sets/animals/giraffe.jpg'),
    new image('lion', '/image-sets/animals/lion.jpg'),
    new image('monkey', '/image-sets/animals/monkey.jpg'),
    new image('penguin', '/image-sets/animals/penguin.png'),
    new image('duck', '/image-sets/animals/duck.jpg'),
    new image('elephant', '/image-sets/animals/elephant.jpg'),
    new image('panda', '/image-sets/animals/panda.jpg'),
    new image('snake', '/image-sets/animals/snake.jpg'),
    new image('toucan', '/image-sets/animals/toucan.jpg')
];

const activeSet = [];
const setActiveSet = function(set) {
    activeSet.length = 0;
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
    const facedownCards = [...document.querySelectorAll('.face-down')]
    facedownCards.forEach((card) => {
        const cardIndex = card.id.replace('grid', '');
        card.addEventListener('click', activeSet[cardIndex].flipCard_);
        card.setAttribute('state', 'dormant');
    })
}
const flipCard = function(gridID) {
    card = document.querySelector(`#${gridID}`);
    if (card.getAttribute('state') === 'dormant') {
        flipUp(card);
    }
    const selectedCards = [...document.querySelectorAll('div[state="selected"')];
    if (selectedCards.length >= 2) {
        // maybe: remake this part to allow multi-card validation 
        // win pair if matching
        if ((selectedCards[0].getAttribute('name') === selectedCards[1].getAttribute('name'))) {
            winCardPair(selectedCards);
            resetFlipCardListeners(dontWait);
        } else {
            failCardPair(selectedCards);
            resetFlipCardListeners(turnTimeoutValue);
        }
    }
/////////////////////////////////////////
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
    function winCardPair(selectedCards) {
        selectedCards.forEach((card) => {
            card.setAttribute('state', 'secured');
            card.querySelector('.card').classList.add(`border-${activePlayer}`);
        })
        scores[activePlayer]++;
        document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer]
        checkWin();
    }
    function failCardPair(selectedCards) {
        selectedCards.forEach((card) => {
            setTimeout(() => {flipDown(card)}, turnTimeoutValue);
        })
        switchPlayer();
    }
    function resetFlipCardListeners(timeout) {
        const allCards = [...document.querySelectorAll('.card-container')];
        allCards.forEach((card) => {
            const cardIndex = card.id.replace('grid', '');
            card.removeEventListener('click', activeSet[cardIndex].flipCard_);
            setTimeout(updateClickableCards, timeout);
        })
    }
}

const switchPlayer = function() {
    document.querySelector('#player-0').classList.toggle('player--active');
    document.querySelector('#player-1').classList.toggle('player--active');
    activePlayer = activePlayer === 0 ? 1 : 0;
}
const checkWin = function () {
    if (![...document.querySelectorAll('div[state="dormant"')][0] && ![...document.querySelectorAll('div[state="selected"')][0]) {
        if (scores[0] !== scores[1]) {
            determineWinner();
        } else {
            document.querySelector('#win-message').textContent = `It's a tie!`;
        }
        document.querySelector('#win-message').toggleAttribute('hidden');
        document.querySelector('#play-again').toggleAttribute('hidden');
    }

    function determineWinner() {
        highscore = scores.reduce((acc, cur) => acc > cur ? acc : cur);
        winner = scores.indexOf(highscore)
        document.querySelector('#win-message').textContent = `Player ${winner + 1} wins!`;
        document.querySelector(`#player-${winner}`).classList.add('player--winner');
    }
}
const clearBoard = function() {
    const allCards = [...document.querySelectorAll('.card-container')];
    allCards.forEach((card) => {
        const cardIndex = card.id.replace('grid', '');
        card.removeEventListener('click', activeSet[cardIndex].flipCard_);
        card.remove();
        console.log(`hi`);
    })
}

// Add play-again button functionality
document.querySelector('#play-again').addEventListener('click', () => {
    clearBoard();
    beginGame();
    document.querySelector('#win-message').toggleAttribute('hidden');
    document.querySelector('#play-again').toggleAttribute('hidden');
})

const createCardFace = function(image) {
    let cardFaceDiv = document.createElement(`div`);
    cardFaceDiv.classList.add('card-front');
    cardFaceDiv.id = `${image.gridID}`; // could refactor to eliminate gridID within face
    cardFaceDiv.setAttribute('name', `${image.name}`);
    cardFaceDiv.innerHTML = `<img src="${image.link}" />`;
    return cardFaceDiv;
}
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
const createBoard = function() { // could move above functions into this one
    activeSet.forEach((image) => {
        const card = containerizeImage(createCardFace(image));
        document.querySelector('#board').append(card);
    });
}
const setFirstPlayer = function() {
    document.querySelector('#player-0').classList.add('player--active');
    document.querySelector('#player-1').classList.remove('player--active');
    activePlayer = 0;
    document.querySelector('#player-0').classList.remove('player--winner');
    document.querySelector('#player-1').classList.remove('player--winner');
    document.querySelector(`#score-0`).textContent = scores[0];
    document.querySelector(`#score-1`).textContent = scores[1];
}

////////////////////////////////////////////
// BEGIN:
const beginGame = function() {
    scores.fill(0);
    setActiveSet(animals);
    createBoard();
    setFirstPlayer();
    updateClickableCards();
    document.querySelector('#menu').setAttribute('hidden', '');
}

document.querySelector('#start-game-button').addEventListener('click', beginGame);