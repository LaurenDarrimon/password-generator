// code refactor to make modular functions

//make a big ol' object that contains arrays of possible characters 
let characters = {
    lowerCase:["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    numerals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    //ADD in special characters here later, just get basic code working for now. 
  }
  
  //QUESTION how to convert lowercase array with .toUpperCase method?? 
  //characters.upperCase = characters.lowerCase.toUpperCase; 
  
  
  //declare an empty array that we will start to fill up with possible characters according to user prompts. 
  let allPossibleCharacters = [];
  //empty array for characters that will become password
  let passwordArray = [];


  //this declares a variable that will reference the id tag "generate", which in this case is the button
  let generateBtn = document.querySelector("#generate");
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    //this will change the text in the box to be the new password
    passwordText.value = password;
  }
  // Add event listener to generate button, so that when it is clicked, it will run writePassword() function. 
  generateBtn.addEventListener("click", writePassword);
  
  
  //declare the function that will generate the password, made up of four modular functions that build on each other. 
  function generatePassword(){

    length = getLength();

    allPossibleCharacters = promptUser();

    passwordArray = makePasswordArray();
  
    password = joinPassword();

  }
  

function getLength(){
       //first, get the number of characters we need to generate from the user
    let length = prompt('How many characters would you like in your password? (8-128 characters)', "12");
  
    //if it's too long or two short, reprompt user
    if (length < 8 || length > 128) {
      length = prompt("Your password doesn't meet length requirements, please try again (8-128 characters)", "12");
    }

    return length;
}
  
function promptUser(){
    // prompt user if they'd like uppercase, if yes, add uppercase array to all possible characters array
    let upperCaseYN = confirm("Would you like to have uppercase characters in your password?");
    if (upperCaseYN) {
      allPossibleCharacters = characters.upperCase;
    }
  
    //prompt user if they'd like lowercase, if yes add lowercase array to all possible characters array
    let lowerCaseYN = confirm("Would you like to have lowercase characters in your password?");
    if (lowerCaseYN) {
      allPossibleCharacters = allPossibleCharacters.concat(characters.lowerCase);
    }
  
    //prompt user if they'd like numerals, if yes add numerals array to all possible characters array
    let numeralsYN = confirm("Would you like to have numerals in your password?");
    if (numeralsYN) {
      allPossibleCharacters = allPossibleCharacters.concat(characters.numerals);
    }

    return allPossibleCharacters;
  }

  function makePasswordArray(){
          //write a loop that iterates for up to the length of the password and generates a random number, 
    //between 0 and the length of the all possible characters array. Look in the all possible characters 
    //array at that random number position, and add that character to the password. 
  
    for (let i=0; i < length; i++) {
        //math.random is a random number between 0 and 1, multipled by the length of our array (minus 1,
        //since the last position in the array is one less than the length)
        //will get us some number less than the length of the array. Floor will round down to a whole number. 
        let randomIndex  = Math.floor(Math.random() * (allPossibleCharacters.length));
    
        //add each random character to array for password. 
        passwordArray.push(allPossibleCharacters[randomIndex]);
    
      }
      return passwordArray;
  }

  function joinPassword(){
          //change password to be a string of all the values in the password array joined together, passed an empty string
    //as argument to join method so that there would be no separator characters. 
    password = passwordArray.join('');
  
    
    console.log(password);
    alert("Your new password is:   " +  password);
  
    //return the value of passward out of this generate password function so that 
    //the write password function (way back up on line 28) can recieve it and write it! YAY
    return password;
  }