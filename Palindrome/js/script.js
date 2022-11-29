let word= prompt("Scopri se la parola inserita è palindroma");

function isPalindrome(string){

  let sum = "";

  for(let i = string.length -1; i >= 0; i--){
    sum += string[i];
  };

  if (sum === string){
    return "It is a palindrome!";
  };

  return "It is NOT a palindrome!";
};

console.log(isPalindrome(word.toLowerCase()));