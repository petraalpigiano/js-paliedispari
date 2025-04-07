// RACCOLTA DATI
const userWord = prompt("Inserisci una parola", "cipolla");
let wordReverse = "";
for (let i = 0; i < userWord.length; i++) {
  const currentCharacter = userWord[i];
  wordReverse = currentCharacter + wordReverse;
}

if (userWord === wordReverse) {
  console.log(wordReverse, ":", "La parola è palindroma");
  alert("La parola è palindroma");
} else {
  console.log(wordReverse, ":", "La parola non è palindroma");
  alert("La parola non è palindroma");
}

// SVOLGIMENTO
// function isPalindrome(params) {}
// OUTPUT
