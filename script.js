function check() {
    var input = document.getElementById('myTextBox').value;
    var cleanedInput = input.replace(/[^a-zA-Z0-9+\-*/]/g, '');

    if (cleanedInput.length === 7 || containsSpecificWords(cleanedInput)) {
        document.body.style.backgroundImage = 'url("thala.gif")';
        playMusic('Thala.mp3');
        document.body.style.backgroundColor = '';
    } else {
        var result = evaluateExpression(cleanedInput);

        if (!isNaN(result) && result === 7) {
            document.body.style.backgroundImage = 'url("thala.gif")';
            playMusic('Thala.mp3');
        } else if (!isNaN(result) && result === 18) {
            document.body.style.backgroundImage = 'url("king.gif")';
            stopMusic();
        } else {
            document.body.style.backgroundImage = 'url("Nothala.gif")';
            stopMusic();
        }
    }
}

function playMusic(filename) {
    var audio = new Audio(filename);
    audio.play();
}

function stopMusic() {
    var audioElements = document.getElementsByTagName('audio');
    for (var i = 0; i < audioElements.length; i++) {
        audioElements[i].pause();
        audioElements[i].currentTime = 0; 
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
    
}
