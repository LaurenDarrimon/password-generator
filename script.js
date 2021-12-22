// Assignment Code

//make a big ol' object that contains arrays of possible characters 
let characters = {
  lowerCase:["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numerals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  //ADD in special characters here later, just get basic code working for now. 
}

//QUESTION how to convert lowercase array with .toUpperCase method?? 
//characters.upperCase = characters.lowerCase.toUpperCase; 

console.log(characters.lowerCase.length);

//declare an empty array that we will start to fill up with possible characters according to user prompts. 
let allPossibleCharacters = [];

//this declares a variable that will reference the id tag
//"generate, which in this case is the button"
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //this will change the text in the box to be the new password
  passwordText.value = password;
}

// Add event listener to generate button, so that when it is clicked, 
//it will run writePassword() function. 
generateBtn.addEventListener("click", writePassword);


//declare the function that will generate the password
function generatePassword(){

  //first, get the number of characters we need to generate
  let length = prompt('How many characters would you like in your password? (8-128 characters)', "12");
  console.log(length);

  //if it's too long or two short, reprompt user
  if (length < 8 || length > 128) {
    length = prompt("Your password doesn't meet length requirements, please try again (8-128 characters)", "12");
  }

  console.log(length);


  // prompt user if they's like uppercase, if yes add uppercase array to all possible characters array

  //prompt user if they's like lowercase, if yes add lowercase array to all possible characters array

  //prompt user if they's like numerals, if yes add numerals array to all possible characters array

  //prompt user if they'd like special characters, if yes add to all possible characters array

  //write a loop that iterates for up to the length of the password and generates a random number, 
  //between 0 and the length of the all possible characters array. Look in the all possible characters 
  //array at that random number position, and add that character to the password. 






}

