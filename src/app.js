window.onload = function () {
  const suits = ["♥", "♠", "♣", "♦"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const suit = suits[Math.floor(Math.random() * suits.length)];
  const value = values[Math.floor(Math.random() * values.length)];

  const topSuit = document.getElementById("topSuit");
  const bottomSuit = document.getElementById("bottomSuit");
  const cardValue = document.getElementById("cardValue");

  topSuit.innerText = suit;
  bottomSuit.innerText = suit;
  cardValue.innerText = value;

  const redSuits = ["♥", "♦"];
  const color = redSuits.includes(suit) ? "red" : "black";

  topSuit.style.color = color;
  bottomSuit.style.color = color;
  cardValue.style.color = color;
};
