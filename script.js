// code refactor 2.0 to make password generation an object with methods. 


//variable that will reference the id tag "generate" (the button)
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = passwordGenerationObject.generatePassword();
  var passwordText = document.querySelector("#password");
  //this will change the text in the box to be the new password
  passwordText.value = password;
}
// Add event listener to generate button, so that when it is clicked, it will run writePassword() function. 
generateBtn.addEventListener("click", writePassword);



let passwordGenerationObject = {

    //object containing arrays of possible characters 
    characters : {
        lowerCase:["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        numerals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        //ADD in special characters here later
    },
    //empty array that we will start to fill up with possible characters according to user prompts. 
    allPossibleCharacters : [],

     //empty array for characters that will become password
    passwordArray : [],

    //set initial password length to zero
    length : 0,

    //set initial password empty string
    length : "",

    //method to generate password, made up of four modular functions that build on each other. 
    generatePassword: function() {
        length = this.getLength();
        allPossibleCharacters = this.promptUser();
        passwordArray = this.makePasswordArray();
        password = this.joinPassword();
        return this.password;
    },
    
    //method to get number of characters we need to generate from the user
    getLength: function() {
        this.length = prompt('How many characters would you like in your password? (8-128 characters)', "12");
        //if it's too long or two short, reprompt user
         if (this.length < 8 || this.length > 128) {
            this.length = prompt("Your password doesn't meet length requirements, please try again (8-128 characters)", "12");
        }
        return this.length;
    },

    //method to prompt user if they'd like to include certain characters, if yes add those characters array to all possible characters array
    promptUser: function() {
        let upperCaseYN = confirm("Would you like to have uppercase characters in your password?");
        if (upperCaseYN) {
          this.allPossibleCharacters = this.characters.upperCase;
        }
      
        let lowerCaseYN = confirm("Would you like to have lowercase characters in your password?");
        if (lowerCaseYN) {
          this.allPossibleCharacters = this.allPossibleCharacters.concat(this.characters.lowerCase);
        }
      
        let numeralsYN = confirm("Would you like to have numerals in your password?");
        if (numeralsYN) {
          this.allPossibleCharacters = this.allPossibleCharacters.concat(this.characters.numerals);
        }
    
        return this.allPossibleCharacters;
    },

   makePasswordArray: function() {
        //write a loop that iterates for up to the length of the password and generates a random number, 
        //between 0 and the length of the all possible characters array. Look in the all possible characters 
        //array at that random number position, and add that character to the password. 

        for (let i=0; i < this.length; i++) {
            //math.random is a random number between 0 and 1, multipled by the length of our array
            //will get us some number less than the length of the array. Floor will round down to a whole number. 
            let randomIndex  = Math.floor(Math.random() * (this.allPossibleCharacters.length));
        
            //add each random character to array for password. 
            this.passwordArray.push(this.allPossibleCharacters[randomIndex]);
        }
        return this.passwordArray;
    },

   joinPassword: function() {
        //change password to be a string of all the values in the password array joined together, passed an empty string
        //as argument to join method so that there would be no separator characters. 
        this.password = this.passwordArray.join('');
        
        console.log(this.password);
        alert("Your new password is:   " +  this.password);

        //return the value of passward out of this generate password function so that 
        //the write password function (way back up on line 28) can recieve it and write it! YAY
        return this.password;
    },
}