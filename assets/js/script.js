// Assignment code here
// assign variables
// todo variable for , , , special char
var passwordLength; //this is undefined at the moment. (8-128)
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "1234567890".split("");
var specialChar = ["!","\u0022","#","$","%","&","'","(",")","*","+",",","-",
  ".","/",":",";","<","=",">","?","@","[","\u005C","]","^","_","`","{",
  "|", "}","~",];

console.log(specialChar);

function generatePassword(){
  var userLength = prompt("How many characters do you want your password? \n Pick a number between 8 and 128");
  var userLower = confirm("Would you like lowercase letters? \n Press ok for yes. Press cancel for no.");
  var userUpper = confirm("Would you like uppercase letters? \n Press ok for yes. Press cancel for no.");
  var userNumbers = confirm("Would you like numbers? \n Press ok for yes. Press cancel for no.");
  var userSpecial = confirm("Would you like special characters? \n Press ok for yes. Press cancel for no.");

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //function to make password based on confirms
  var passwordText = document.querySelector("#password"); //wher the password will be written

  passwordText.value = password; //this makes password generated into the password text box (still needs to be printed though)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


