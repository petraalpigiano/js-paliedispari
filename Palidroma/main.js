// RACCOLTA DATI
const userWord = prompt("Inserisci una parola", "cipolla");
const wordLetter = [];
for (let i = 0; i < userWord.length; i++) {
  const currentWord = userWord[i];
  wordLetter.unshift(currentWord);
  console.log(wordLetter);
}

// SVOLGIMENTO
// function isPalindrome(params) {}
// OUTPUT
