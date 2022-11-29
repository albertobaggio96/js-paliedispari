function getRandomNumber(numMin, numMax){
  const randomNumber= Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;

  return randomNumber;
};

function isOddOrEven(me, computer){
  let sum = me + computer;

  if (sum % 2 === 0){
    return "even";
  };
  return "odd";
};

function isWin(you, result){
  if (you === result){
    return "You win";
  };
  return "You lose";
};

let myNumber;

do{
  myNumber= parseInt(prompt("Scegli un numero da 1 a 5"), 10);
} while (Number.isNaN(myNumber) || myNumber < 1 || myNumber > 5);

let chooseOddOrEven;

do{
  chooseOddOrEven= prompt("Scrivi Odd or Even");
} while (chooseOddOrEven.toLowerCase() !== "odd" && chooseOddOrEven.toLowerCase() !== "even");

const computerNumber= getRandomNumber(1, 5);

const sumMeAndComputer= isOddOrEven(myNumber, computerNumber);

const winner= isWin(chooseOddOrEven, sumMeAndComputer);





console.log(myNumber);
console.log(oddOrEven);
console.log(computerNumber);
console.log("result", sumMeAndComputer);
console.log(winner);
