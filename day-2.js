let part1 = document.getElementById("part1");
let part2 = document.getElementById("part2");
let part3 = document.getElementById("part3");
let part4 = document.getElementById("part4");
let messageParagraph = document.getElementById("messageParagraph");

// Example
function day2Part1() {
  let wallet;
  let walletNumber;
  let coffeeNumber = 3.99;

  // 1. ask the user for data
  wallet = prompt("How much is in your wallet?");
  // 2. convert the answer to a number
  walletNumber = Number(wallet);

  // 3. use a math expression with the > operator to say if the statements is true or false.
  messageParagraph.innerHTML = `Coffee costs ${coffeeNumber}. You have ${walletNumber}. You can afford coffee: ${walletNumber > coffeeNumber}`
  
}

part1.onclick = day2Part1;


function day2Part2() {
  let bank;
  let bankNumber;
  let carNumber = 5000;

  alert("Try it!");
  // Try it!
  // TODO: Prompt the user for how much in in their bank account. Convert it to a number.
  // 1. Ask the user for data
  bank = prompt ("What is your bank account balance? It's a perfectly reasonable request, no need to be suspicious.");
  // 2. convert it to a number
  bankNumber = Number(bank);

  // 3. use a math expression with the > operator to say if the statements is true or false.
  messageParagraph.innerHTML = `The car costs ${carNumber}. You have ${bankNumber} in your bank. You can afford the car: ${bankNumber > carNumber}`
  
  
}
part2.onclick = day2Part2;


function day2Part3() {
  let wallet;
  let walletNumber;
  let tvNumber = 300;

  alert("Try it!");
  // Try it!
  // TODO: Prompt the user for how much in in their wallet. Convert it to a number, and tell them true or false if they can buy a TV.
  
  // 1. Ask the user for data
  wallet = prompt("How much money do you have in your wallet?");
  // 2. convert it to a number
  walletNumber = Number(wallet);

  // 3. use a math expression with the > operator to say if the statements is true or false.
  messageParagraph.innerHTML = `The cost of the TV is $${tvNumber} and you have $${walletNumber}. It is ${walletNumber >= tvNumber} that you can afford it.`

}
part3.onclick = day2Part3;


function day2Part4() {
  let bank;
  let bankNumber;
  let rocketNumber = 10000000.99;

  alert("Try it!");
  // Try it!
  // TODO: Prompt the user for how much in in their bank account. Convert it to a number, and tell them true or false if they can buy a rocket.
  // 1. Ask the user for data
  bank = prompt("How much is in your bank accout?");
  // 2. convert it to a number
  bankNumber = Number(bank);


  // 3. use a math expression with the > operator to say if the statements is true or false.
  messageParagraph.innerHTML = `The cost to purchase a ride on a rocket is $${rocketNumber}. You have $${bankNumber} so the reality of you going into space is ${bankNumber >= rocketNumber}.`

}
part4.onclick = day2Part4;
