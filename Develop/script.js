// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword () {
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      password = " ";
  for (var i = 0, n = charset.length; i < 128; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
  }
  return password;
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

