
function newCard() {
  const suits = ['♠', '♥', '♦', '♣'];
  const numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

  const topSuit = document.querySelector('.card-suit-top');
  const number = document.querySelector('.card-number');
  const bottomSuit = document.querySelector('.card-suit-bottom');

  topSuit.textContent = randomSuit;
  number.textContent = randomNumber;
  bottomSuit.textContent = randomSuit;

  const isRed = (randomSuit === '♥' || randomSuit === '♦');
  const color = isRed ? 'red' : 'black';

  topSuit.style.color = color;
  number.style.color = color;
  bottomSuit.style.color = color;
}
