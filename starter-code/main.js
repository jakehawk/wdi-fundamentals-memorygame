console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "king";
var cardThree = "king";
var cardFour = "queen";

if (cardTwo === cardFour){
	alert('Sorry, try again.');
} else if (cardOne === cardFour){
	alert('You found a match!');
} else if (cardTwo === cardThree){
	alert('You found a match!');
}
