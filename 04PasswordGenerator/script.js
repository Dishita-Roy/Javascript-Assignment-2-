const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

document.addEventListener("DOMContentLoaded", () => {
    lengthEl.value = 20;
    lengthEl.innerText = 20;
   
    let onLoadLength = lengthEl.value;
    let onLoadNumbers = numbersEl.checked;
    let onLoadSymbols = symbolsEl.checked;
    let onLoadUppercase = uppercaseEl.checked;
    let onLoadLowercase = lowercaseEl.checked;
    resultEl.value = generatePassword(onLoadNumbers, onLoadSymbols, onLoadLength, onLoadUppercase, onLoadLowercase);
  });
   
  // Listen for password range change
  lengthEl.addEventListener("change", (event) => {
    lengthEl.innerText = event.target.value;
  });
   
  // Listen for copy button
  clipboardEl.addEventListener("click", () => {
    copy(resultEl.value);
  });
   
  generateBtn.addEventListener("click", () => {
    const length = lengthEl.value;
    const numbers = numbersEl.checked;
    const symbols = symbolsEl.checked;
    const uppercase = uppercaseEl.checked;
    const lowercase = lowercaseEl.checked;
    resultEl.value = generatePassword(numbers, symbols, length, uppercase, lowercase );
  });
   
  function generatePassword(number, symbol, length, uppercase, lowercase) {
    let generatedPassword = "";
    let variationsCount = [number, symbol, uppercase, lowercase].length;
   
    for (let i = 0; i < length; i += variationsCount) {
      if (number) {
        generatedPassword += getRandomNumber();
      }
      if (symbol) {
        generatedPassword += getRandomSymbol();
      }
      if (lowercase){
      generatedPassword += getRandomLower();
      }
      generatedPassword += getRandomUpper();
    }
      
    const finalPassword = generatedPassword.slice(0, length);
   
    return finalPassword;
  }
   
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
   
  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
   
  function getRandomSymbol() {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
   
  

//const randomFunc = {
    //
//clipboardEl.addEventListener('click', () => {
    
//})

//generateEl.addEventListener('click', () => {
    
//})

//function generatePassword(lower, upper, number, symbol, length) {
    
//}

//function getRandomLower() {
//}

//function getRandomUpper() {
//}

//function getRandomNumber() {
//}

//function getRandomSymbol() {
//}