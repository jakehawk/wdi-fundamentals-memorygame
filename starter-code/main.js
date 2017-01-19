console.log("JS file is connected to HTML! Woo!")
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var boardJS = document.getElementById('game-board');
var cardJS = [];

var createCards = function(cardJS, boardJS){
	for (var i=0; i<cards.length; i++){
		cardJS[i] = document.createElement('div');
		cardJS[i].className = 'card';
		boardJS.appendChild(cardJS[i]);
	}
}
createCards(cardJS, boardJS);

var clickLogic = function(cardJS){
	for (var i=0; i<cards.length; i++){
		var temp = cardJS[i];
		cardJS[i].setAttribute('data-card', cards[i]);
		cardJS[i].addEventListener('click', function(event){
			isTwoCards(temp);
			if(event.target.getAttribute('data-card') === 'king'){
				event.target.innerHTML = '<img src="king.png" alt="King of Spades" />';
			}
			if(event.target.getAttribute('data-card') === 'queen'){
				event.target.innerHTML = '<img src="queen.png" alt="Queen of Clubs" />';	
			}
		}, false);
	}
	return boardJS;
}

clickLogic(cardJS);

function isMatch(cardsInPlay) {
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert('You found a match!');
	}
	else{
		alert('Sorry, try again.');
	}
	

}

function isTwoCards(temp) {
	cardsInPlay.push(temp.getAttribute('data-card'));

	if (cardsInPlay.length === 2){
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

/*if (cardTwo === cardFour){
	alert('Sorry, try again.');
} else if (cardOne === cardFour){
	alert('You found a match!');
} else if (cardTwo === cardThree){
	alert('You found a match!');
}*/
