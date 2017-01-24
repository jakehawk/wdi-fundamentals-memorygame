console.log("JS file is connected to HTML! Woo!")
var cards = ['queen', 'queen', 'king', 'king', 'jack', 'jack'];
var cardsInPlay = [];
var board = document.getElementById('game-board');
var cardElement = [];

function shuffle(cards) {
  var currentIndex = cards.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }
  console.log(cards);
  return cards;
}

shuffle(cards);

function createBoard() {
	for (var i=0; i<cards.length; i++){
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);

		board.appendChild(cardElement);
	}
}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));

	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = '<img src="images/king.png" alt="King of Spades" />';
	} else if (this.getAttribute('data-card') === 'queen') {
		this.innerHTML = '<img src="images/queen.png" alt="Queen of Clubs" />';
	} else {
		this.innerHTML = '<img src="images/jack.png" alt="Jack of Hearts" />';
	}

	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

function isMatch(cards) {
	if (cards[0] === cards[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

document.getElementById('reset').onclick = function (cards, cardElement, cardsInPlay) {
	alert('click click click');
	for (var i=0; i<cards.length; i++){
		cardElement[i].innerHTML = '';
	}
	cardsInPlay = [];
}

createBoard();
/*
var createCards = function(cardElement, boardJS, cards){
	for (var i=0; i<cards.length; i++){
	cardElement[i] = document.createElement('div');
	cardElement[i].className = 'card';
	cardElement[i].setAttribute("data-card", cards[i]);
	console.log();
	boardJS.appendChild(cardElement[i]);
	}
	
}


var clickLogic = function(cardElement, cardsInPlay){
	var temp;
	for (var i=0; i<cards.length; i++){
		temp = cardElement[i];
	 cardElement[i].addEventListener('click', function(event){
			if(event.target.getAttribute('data-card') === 'king'){
				event.target.innerHTML = '<img src="images/king.png" alt="King of Spades" />';
				console.log('you clicked a king');
			}
			if(event.target.getAttribute('data-card') === 'queen'){
				event.target.innerHTML = '<img src="images/queen.png" alt="Queen of Clubs" />';	
				console.log('you clicked a queen');
			}
			if(event.target.getAttribute('data-card') === 'jack'){
				event.target.innerHTML = '<img src="images/jack.png" alt="Jack of Hearts" />';	
				console.log('you clicked a jack');
			}
			isTwoCards(event.target, cardsInPlay, cardElement);
		});
	}
	return boardJS;
}



function isTwoCards(temp, cardsInPlay, cardElement) {
	cardsInPlay.push(temp.getAttribute('data-card'));


	if (cardsInPlay.length === 2){
		isMatch(cardsInPlay);
		cardsInPlay = [];
		for (var i=0; i<cards.length; i++){
	 		cardElement[i].innerHTML = '';
		}
	}
}

function isMatch(cardsInPlay) {
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert('You found a match!');
	}
	else{
		alert('Sorry, try again.');
	}
	cardsInPlay = [];
}
createCards(cardElement, boardJS, cards);
clickLogic(cardElement, cardsInPlay);
*/
