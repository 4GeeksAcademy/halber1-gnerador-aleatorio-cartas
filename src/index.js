
const newCard = () => {
  console.log('genero una nueva carta');
  let suits = ['♦', '♥', '♠',  '♣']
  let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
  
  // 1. aleatoreamente generar un palo y un numero

  // 2.a Mostrar el palo en los div#arriba y div#abajo el palo
  // 2.b Renderizar el número en el div#number

  // condicional u operador ternario: si es corazon o diamante cambiar el color a rojo
  // si es hoja o trebol entocnes el color es negro 
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  newCard()
};

setInterval(newCard, 1000);