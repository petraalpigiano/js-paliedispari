// RACCOLTA DATI
const userEvenOrOdd = prompt("Scegli pari o dispari", "pari");
const userNumber = parseInt(prompt("Scegli un numero da 1 a 5", "3"));
console.log("utente pari o dispari:", userEvenOrOdd);
console.log("utente numero tra 1 e 5:", userNumber);
const pcNumber = Math.floor(Math.random() * 5) + 1;
console.log("numero pc tra 1 e 5:", pcNumber);
const sumPcUserNumber = userNumber + pcNumber;
console.log("somma numeri:", sumPcUserNumber);

// SVOLGIMENTO
if (sumPcUserNumber % 2 === 0 && userEvenOrOdd === "pari") {
  //pari
  console.log("Utente ha vinto");
  alert("Utente ha vinto");
} else if (sumPcUserNumber % 2 === 1 && userEvenOrOdd === "dispari") {
  //dispari
  console.log("Utente ha vinto");
  alert("Utente ha vinto");
} else {
  console.log("Pc ha vinto");
  alert("Pc ha vinto");
}
// OUTPUT
