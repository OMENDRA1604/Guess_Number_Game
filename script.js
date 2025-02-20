let randomNum = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const userGuessSlot = document.querySelector('.guesses');
const Remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let NumGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess)
    validateGuess(guess);
});
}

function validateGuess(guess){
  if(isNaN(guess) || guess < 1 || guess > 100){
    alert('Please Enter a valid Number')
  }else{
    prevGuess.push(guess);
    if(NumGuess === 10){
      DisplayGuess(guess);
      DisplayMessage(`Game Over. Random number was ${randomNum}`);
      endGame();
    }else{
      DisplayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess){
  if(guess === randomNum){
    DisplayMessage(`Congratulations! You guessed it right`);
    endGame();
  }else if(guess < randomNum){
    DisplayMessage(`Number is TOOOO low`)
  }else if(guess > randomNum){
    DisplayMessage(`Number is TOOOO high`)
  }
}

function DisplayGuess(guess){
  userInput.value = '';
  userGuessSlot.innerHTML += `${guess}, `;
  NumGuess++;
  Remaining.innerHTML = `${11 -  NumGuess}`;
}

function DisplayMessage(Message){
  lowOrHigh.innerHTML = `<h2>${Message}</h2>`
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled','');
  p.classList.add('button')
  p.innerHTML = `<button id = "newGame">NEW GAME</button>`;
  playGame = false;
  StartOver.appendChild(p);
  NewGame();
}

function NewGame(){
  const newGameButton =  document.querySelector('#newGame');
  newGameButton.addEventListener('click' , function(e){
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    NumGuess = 0;
    userGuessSlot.innerHTML = '';
    userInput.removeAttribute('disabled')
    Remaining.innerHTML = `${10 -  NumGuess}`;
    StartOver.removeChild(p); 

    playGame = true;
  })
}
