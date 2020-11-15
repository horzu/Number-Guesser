let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


// Write your code below:


let generateTarget = x => Math.floor(Math.random() * 9) ;

let getAbsoluteDistance = (guess, target) => Math.abs(target - guess);


let compareGuesses = (humanGuess, computerGuess, secretTargetNumber) => {
    if (humanGuess < 0) {
        return alert(' It\'s not possible to set a number outside range 0-10');
        
    }
    if (humanGuess > 10) {
        return alert(' It\'s not possible to set a number outside range 0-10');
        
    }

    let humanRange = getAbsoluteDistance(humanGuess, secretTargetNumber);
    let computerRange = getAbsoluteDistance(computerGuess, secretTargetNumber);
    if(humanRange <= computerRange){
        return true;
    } else {
        return false;
    }
};

let updateScore = string => {
    if(string === "human"){
        humanScore += 1;
    } else if(string === "computer"){
        computerScore += 1;
    }
};

let advanceRound = () => currentRoundNumber += 1;