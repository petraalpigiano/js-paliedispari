// RACCOLTA DATI
const userWord = prompt("Inserisci una parola", "cipolla");
let wordReverse = "";

// SVOLGIMENTO
/**
 *
 * @param {string} userWord parola inserita dall'utente
 * @param {string} wordReverse parola invertita
 * @returns {boolean} indica se la parola è palindroma
 */
function isPalindrome(userWord, wordReverse) {
  for (let i = 0; i < userWord.length; i++) {
    const currentCharacter = userWord[i];
    wordReverse = currentCharacter + wordReverse;
  }

  if (userWord === wordReverse) {
    alert("La parola è palindroma");
    return true;
  } else {
    alert("La parola non è palindroma");
    return false;
  }
}
// OUTPUT
console.log("La parola è palindroma:", isPalindrome(userWord, wordReverse));
