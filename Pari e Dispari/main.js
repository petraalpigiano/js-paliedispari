// RACCOLTA DATI
const userEvenOrOdd = prompt("Scegli pari o dispari", "pari");
const userNumber = parseInt(prompt("Scegli un numero da 1 a 5", "3"));
console.log("utente pari o dispari:", userEvenOrOdd);
console.log("utente numero tra 1 e 5:", userNumber);

/**
 *
 * @param {number} max numero massimo del range
 * @param {number} min numero minimo del range (default 1)
 * @returns {number} numero casuale del range
 */
function generateRandomNumber(max, min = 1) {
  const pcNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return pcNumber;
}
console.log("numero pc tra 1 e 5:", generateRandomNumber(5));

const sumPcUserNumber = userNumber + generateRandomNumber(5);
console.log("somma numeri:", sumPcUserNumber);

// SVOLGIMENTO
function isSumEven(sumPcUserNumber) {
  if (sumPcUserNumber % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
// OUTPUT
console.log("La somma è pari:", isSumEven(sumPcUserNumber));

// console.log("Utente ha vinto");&& userEvenOrOdd === "pari"&& userEvenOrOdd === "dispari"
//   alert("Utente ha vinto");(sumPcUserNumber % 2 === 1)
//   console.log("Pc ha vinto");
//   alert("Pc ha vinto");
