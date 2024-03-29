const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'stone' || userInput === 'paper' || userInput === 'scissors' || userInput === 'rock') {
    return userInput;
  } else {
    console.log('ERROR 404!');
  }
};
getUserChoice('fork');
console.log(getUserChoice('fork'));

function getComputerChoice(){
  randomNumber = Math.floor(Math.random()*3);
  switch (randomNumber){
    case 0:
    return 'stone';
    break;

    case 1:
    return 'paper';
    break;

    case 2:
    return 'scissors';
    break;

    default:
    return 'Unidentified object used!';
    break;
  }
};

function determineWinner(userChoice, computerChoice) {

  if(userChoice === 'rock'){
    return 'The user wins for sure this time!';
  }

  if(userChoice === computerChoice) {
    return 'The game is a tie!';
  }

  if(userChoice === 'stone'){
    if(computerChoice === 'paper'){
      return 'The computer won!';
    } else {
      return 'The user won!';
    }
  }

  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'The computer won this time!';
    } else {
      return 'The user won again!';
    }
  } 

  if(userChoice === 'scissors'){
    if(computerChoice === 'stone'){
      return 'The computer won finally!';
    } else {
      return 'The user won all 3 games!';
    }
  }

  function playGame(){
    const userChoice = getUserChoice('stone');
    const computerChoice = getComputerChoice();
    console.log('The user showed ' + userChoice);
    console.log('The computer showed ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };

  playGame();
};

