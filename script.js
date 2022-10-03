// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){
  var password = " ";
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var characters = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "+", "~"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var characterChoicePrompt = window.prompt("Would you like your password to have special characters? y/n");
  var lowerCasePrompt = window.prompt("Do you want lowercase letters? y/n");
  var upperCasePrompt = window.prompt("Do you want uppercase letters? y/n");
  var numbersPrompt = window.prompt("Do you want your password to have numbers? y/n");
  var passwordLengthString = window.prompt("How many characters do you want your password to have? Please choose between 8-128");
  var passwordLength = parseInt(passwordLengthString);
  while (passwordLength < 8 || passwordLength > 128){
    var newPasswordLengthString = window.prompt("Per my last instruction, your password must be between 8-128 characters dude. Try again");
    passwordLength = parseInt(newPasswordLengthString);
  }
  var userWantsLower = lowerCasePrompt === "y"  || lowerCasePrompt === "Y";
  var userWantsUpper = upperCasePrompt === "y" || upperCasePrompt === "Y";
  var userWantsChars = characterChoicePrompt === "y"  || characterChoicePrompt === "Y";
  var userWantsNumbers = numbersPrompt === "y" || numbersPrompt === "Y";
  var charactersUserWants = [];
  if (userWantsLower){
    charactersUserWants = charactersUserWants.concat(lowerCase);
  }
  if (userWantsUpper){
    charactersUserWants = charactersUserWants.concat(upperCase);
  }
  if (userWantsChars){
    charactersUserWants = charactersUserWants.concat(characters);
  }
  if(userWantsNumbers){
    charactersUserWants = charactersUserWants.concat(numbers);
  }

for (let i = 0; i < passwordLength ; i++){
  var randomInteger = Math.floor(Math.random()*charactersUserWants.length);
  password = password + charactersUserWants[randomInteger];
}

 

   return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
