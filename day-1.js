let part1 = document.getElementById("part1");
let part2 = document.getElementById("part2");
let part3 = document.getElementById("part3");
let part4 = document.getElementById("part4");
let messageParagraph = document.getElementById("messageParagraph");

function day1Part1() {
  let playerOne;
  playerOne = {};
  playerOne.name = prompt("What is your name?");
  playerOne.hiScore = prompt("What is your all time hi-score?");
  // Try it!
  // TODO: add a new question for the player. Assign the answer to the playerOne Object.
  playerOne.hitPoints = prompt("How many hit points do you have?");
  

  // Try it!
  // TODO: add the answer to the new question here.
  messageParagraph.innerHTML = `Hi, ${playerOne.name}! Can you beat your hi score of ${playerOne.hiScore} with only ${playerOne.hitPoints} hit points?`;

}

part1.onclick = day1Part1;


function day1Part2() {
  let customer = {};
  customer.name = prompt("What is your name?");
  customer.address = prompt("What is your address?");
  // Try it!
  // TODO: add a new question for the player. Assign the answer to the playerOne Object.
  customer.zipCode = prompt("What is your zip code?");

  
  // Try it!
  // TODO: add the answer to the new question to the innerHTML statment below.
  messageParagraph.innerHTML = `Hi, ${customer.name}! Your current address is ${customer.address} and your zip code is ${customer.zipCode}.`;
}
part2.onclick = day1Part2;


function day1Part3() {
  let pet;
  pet = {};

  // Try it!
  // TODO: create a prompt to ask about a pet
  pet.species = prompt("What type of pet do you have?")
  // Try it!
  // TODO: make a message based on the answers to the prompt.
  messageParagraph.innerHTML = `The type of pet you have is a ${pet.species}.`;
}
part3.onclick = day1Part3;


// Try it!
// TODO: add your own idea for a prompt. Use an object to store the user's response.
function day1Part4() {
  alert("hello!");
  let vegetables = {};
  vegetables.firstChoice = prompt("What is your favorite vegetable?");
  vegetables.secondChoice = prompt("What is your second favorite vegetable?");
  messageParagraph.innerHTML = `You love to eat ${vegetables.firstChoice} and when it's not available you'll eat ${vegetables.secondChoice}.`;

  
}

part4.onclick = day1Part4;