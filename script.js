function check() {
  var input = document.getElementById('myTextBox').value;
  var cleanedInput = input.replace(/[^a-zA-Z0-9+\-*/]/g, '');

  if (cleanedInput.length === 7 || containsSpecificWords(cleanedInput)) {
      document.body.style.backgroundImage = 'url("thala.gif")';
      document.body.style.backgroundColor = '';
  } else {
      var result = evaluateExpression(cleanedInput);

      if (!isNaN(result) && result === 7) {
          document.body.style.backgroundImage = 'url("thala.gif")';
      } else if (!isNaN(result) && result === 18) {
          document.body.style.backgroundImage = 'url("king.gif")';
      } else {
          document.body.style.backgroundImage = 'url("Nothala.gif")';
      }
  }
}

function containsSpecificWords(input) {
  var specificWords = ["thala", "msd", "mahi", "7"];
  var regex = new RegExp(specificWords.join("|"), "i");
  return regex.test(input);
}

function evaluateExpression(input) {
  try {
      var operators = ['+', '-', '*', '/'];
      var digitsAndOperators = input.match(/[+\-*/]|\d+/g);

      var result = eval(digitsAndOperators.join(''));

      return result;
  } catch (error) {
      console.error('Invalid expression');
      return NaN;
  }
}

function checkBackground() {
  // If you want to perform additional actions on input change, add them here
  // For now, this function is kept empty
}