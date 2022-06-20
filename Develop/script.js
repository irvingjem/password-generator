// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Prompts for user to click through when creating their password

function generatePassword() {
    var password = "";
    var length = Number(prompt("How many characters would you like your password to be?"));
    while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

    var uppers = confirm("Would you like to use uppercase letters?");
    var lowers = confirm("Would you like to use lowercase letters?");
    var numbers = confirm("Would you like to use numbers?");
    var symbols = confirm("Would you like to use special characters?");

    while (!uppers && !lowers && !numbers && !symbols) {
        alert("You must select at least one character type!");
        uppers = confirm("Would you like to use uppercase letters?");
        lowers = confirm("Would you like to use lowercase letters?");
        numbers = confirm("Would you like to use numbers?");
        symbols = confirm("Would you like to use special characters?");
    }

    // Allowed list of characters for the password generator to select from
    var allowedList = "";
    if (uppers) allowedList += "QWERTYUIOPASDFGHJKLZXCVBNM";
    if (lowers) allowedList += "qwertyuiopasdfghjklzxcvbnm";
    if (numbers) allowedList += "1234567890";
    if (symbols) allowedList += "!@#$%^&*(){}[]=<>/,.";

    // console.log(allowedList);

    // For function to run through the allowed list and length variables 
    for (var i = password.length; i < length; i++) {
        var randomNumber = Math.floor(Math.random() * allowedList.length);
        //console.log("Random number is ", randomNumber, " genertes rndom letter ", allowedList.charAt(randomNumber));
        password += allowedList.charAt(randomNumber);
    }
    //console.log("updated ", password);

    // Prints the password on the page
    return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Code refrence 
// var allowed = {}; ///creating a new blank object 
// //based on confirm you are picking the allowed letters or symbols 
// if (uppers) password += rando(allowed.uppers = "QWERTYUIOPASDFGHJKLZXCVBNM");
// if (lowers) password += rando(allowed.lowers = "qwertyuiopasdfghjklzxcvbnm");
// if (numbers) password += rando(allowed.numbers = "1234567890");
// if (symbols) password += rando(allowed.symbols = "!@#$%^&*(){}[]=<>/,.");

// console.log(allowed);
// console.log(password);