const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];

let passwordButton = document.getElementById("passwordButton");

function generatePassword() {
  // Get the password length and character options from the HTML
  const passwordLength = document.getElementById('passwordLength').value;
  if (passwordLength < 10) {
    alert('For a secure password, it is recommended to use at least 10 characters.');
    return;
  }
  if (passwordLength > 28) {
    passwordLength = 28;
  }
  const uppercaseOption = document.getElementById('uppercase-letters-option').checked;
  const lowercaseOption = document.getElementById('lowercase-letters-option').checked;
  const numbersOption = document.getElementById('numbers-option').checked;
  const specialCharactersOption = document.getElementById('special-characters-option').checked;

  // Create an array to store the characters that will be included in the password
  const passwordCharOptions = [];

  // Add uppercase characters to the array if the corresponding checkbox is checked
  if (uppercaseOption) {
    passwordCharOptions.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }

  // Add lowercase characters to the array if the corresponding checkbox is checked
  if (lowercaseOption) {
    passwordCharOptions.push("abcdefghijklmnopqrstuvwxyz");
  }

  // Add numbers to the array if the corresponding checkbox is checked
  if (numbersOption) {
    passwordCharOptions.push("0123456789");
  }

  // Add special characters to the array if the corresponding checkbox is checked
  if (specialCharactersOption) {
    passwordCharOptions.push("~`!@#$%^&*()_-=+[]{}|:;'<>,.?/");
  }

  // If no character options are selected, display an error message
  if (passwordCharOptions.length === 0) {
    alert("Please select at least one character option!");
    return;
  }

  // Generate the first password
  let passwordOne = '';
  for (let i = 0; i < passwordLength; i++) {
    const charSet = passwordCharOptions[Math.floor(Math.random() * passwordCharOptions.length)];
    const index = Math.min(Math.floor(Math.random() * charSet.length), charSet.length - 1);
    const randomChar = charSet[index];
    passwordOne += randomChar;
  }

  // Generate the second password
  let passwordTwo = '';
    for (let i = 0; i < passwordLength; i++) {
      const charSet = passwordCharOptions[Math.floor(Math.random() * passwordCharOptions.length)];
      const index = Math.min(Math.floor(Math.random() * charSet.length), charSet.length - 1);
      const randomChar = charSet[index];
      passwordTwo += randomChar;
}

  // Display the generated passwords in the password boxes
  document.getElementById('passwordBoxOne').innerHTML = passwordOne;
  document.getElementById('passwordBoxTwo').innerHTML = passwordTwo;
  
  if (passwordOne.length !== passwordTwo.length) {
  generatePassword();
}
  
}


function generatePasswordWithOptions(length, includeUppercase, includeLowercase, includeNumbers, includeSpecialCharacters) {
  let password = "";
  let characterSet = [];

  if (includeUppercase) {
    characterSet = characterSet.concat(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]);
  }
  if (includeLowercase) {
    characterSet = characterSet.concat(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
  }
  if (includeNumbers) {
    characterSet = characterSet.concat(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
  }
  if (includeSpecialCharacters) {
    characterSet = characterSet.concat(["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]);
  }

  for (let i = 0; i < length; i++) {
    password += characterSet[Math.floor(Math.random() * characterSet.length)];
  }
  return password;
}


function generatePasswordWithLength(length) {
    
  let password = "";
  let i = 0;
  const interval = setInterval(() => {
    password += characters[Math.floor(Math.random() * characters.length)];
    document.getElementById("passwordBoxOne").innerHTML = password;
    document.getElementById("passwordBoxTwo").innerHTML = password;
    i++;
    if (i >= length) {
      clearInterval(interval);
    }
  }, 100);
}

