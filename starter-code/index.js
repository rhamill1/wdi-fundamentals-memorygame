
var gameB = document.getElementById('game-board');


var createBoard = function {
    for (var i = 0; i < cards.length; i++) {
        var newListEl = document.createElement('div');
        newListEl.className = 'card';
        board.appendChild(newListEl);
        cardElement.setAttribute('data-card', cards[i]);
        cardElement.addEventListener('click', isTwoCards);}
        board.appendChild(cardElement);
        board.appendChild(cardElement);}


var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var isMatch = function(cards) {
    if (cardsInPlay[0] = cardsInPlay[1]) {
        return "match";}
    else {
        return "not a match";}}

var isTwoCards = function() {
    cardsInPlay.push(this.getAttribute('data-card'));
    console.log(this.getAttribute('data-card'));
    if (this.getAttribute('data-card') === 'king') {
        this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>"; // king
    } else {
        this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>"; //queen
    }
    if (cardsInPlay.length === 2) {
        isMatch(cardsInPlay);}
    cardsInPlay = [];}



// represents the cards of the game
var cards = ['queen', 'queen', 'king', 'king'];

// represents the cards in play
var cardsInPlay = [];

createBoard();
