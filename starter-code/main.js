console.log("JS file is connected to HTML! Woo!")
var cards = ['queen', 'queen', 'king', 'king', 'jack', 'jack'];
var cardsInPlay = [];
var boardJS = document.getElementById('game-board');
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

var createCards = function(cardElement, boardJS, cards){
	for (var i=0; i<cards.length; i++){
	cardElement[i] = document.createElement('div');
	cardElement[i].className = 'card';
	cardElement[i].setAttribute("data-card", cards[i]);
	console.log()
	//cardElement[i].innerHTML = '<img src="images/back.png" alt="Card Back" />';
	boardJS.appendChild(cardElement[i]);
	}
	
}
createCards(cardElement, boardJS, cards);

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
			isTwoCards(event.target, cardsInPlay);
		});
	}
	return boardJS;
}

clickLogic(cardElement, cardsInPlay);

function isTwoCards(temp, cardsInPlay, cardElement) {
	cardsInPlay.push(temp.getAttribute('data-card'));


	if (cardsInPlay.length === 2){
		isMatch(cardsInPlay, cardElement);
		cardsInPlay = [];
	}
}

function isMatch(cardsInPlay, cardElement) {
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert('You found a match!');
	}
	else{
		alert('Sorry, try again.');
	}
	for (var i=0; i<cards.length; i++){
	 cardElement[i].innerHTML = '';
	}
}
/*if (cardTwo === cardFour){
	alert('Sorry, try again.');
} else if (cardOne === cardFour){
	alert('You found a match!');
} else if (cardTwo === cardThree){
	alert('You found a match!');
}

*/
