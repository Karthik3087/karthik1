// Variables to store user and computer choices
const choices = ['rock', 'paper', 'scissors'];

// Get the DOM elements
const userChoiceText = document.getElementById('user-choice');
const computerChoiceText = document.getElementById('computer-choice');
const winnerText = document.getElementById('winner');
const resetButton = document.getElementById('reset');

// Function to generate a random choice for the computer
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a draw!';
    }

    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    }

    return 'Computer wins!';
}

// Function to handle the game logic when a choice is made
function handleChoice(userChoice) {
    const computerChoice = getComputerChoice();

    // Display choices
    userChoiceText.textContent = `Your Choice: ${userChoice}`;
    computerChoiceText.textContent = `Computer's Choice: ${computerChoice}`;

    // Determine winner
    const winner = determineWinner(userChoice, computerChoice);
    winnerText.textContent = `Result: ${winner}`;

    // Show the reset button after the result
    resetButton.style.display = 'block';
}

// Add event listeners to the buttons
document.getElementById('rock').addEventListener('click', () => handleChoice('rock'));
document.getElementById('paper').addEventListener('click', () => handleChoice('paper'));
document.getElementById('scissors').addEventListener('click', () => handleChoice('scissors'));

// Reset the game when the reset button is clicked
resetButton.addEventListener('click', () => {
    userChoiceText.textContent = 'Your Choice: ';
    computerChoiceText.textContent = 'Computer\'s Choice: ';
    winnerText.textContent = 'Result: ';
    resetButton.style.display = 'none';
});
