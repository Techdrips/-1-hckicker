// Function to check if the app is in standalone mode
function isStandalone() {
  return (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone);
}

// If the app is running in standalone mode, show the game. Otherwise, hide it.
document.addEventListener('DOMContentLoaded', function() {
  const clickerGame = document.getElementById('clicker');
  const addToHomeScreenMsg = document.getElementById('addToHomeScreen');

  if (isStandalone()) {
    // App is running as a standalone PWA, show the game and hide the message
    clickerGame.style.display = 'block';
    addToHomeScreenMsg.style.display = 'none';
  } else {
    // App is running in a browser, show the add to home screen message and hide the game
    clickerGame.style.display = 'none';
    addToHomeScreenMsg.style.display = 'block';
  }
});

// Game variables
let points = 0;
const junkItems = [
  'dorito.png',  // Replace with your junk food images
  'burger.png',
  'pizza.png',
  'fries.png',
  'soda.png'
];
let timer = 30;  // 30-second timer
let isGameActive = false;

// Display the junk item
const junkImage = document.createElement('img');
junkImage.src = junkItems[0];  // Start with Dorito
junkImage.alt = "Junk Item";
junkImage.style.width = '100px';  // Adjust size as necessary
document.getElementById('clicker').appendChild(junkImage);

// Points display
const pointsDisplay = document.getElementById('pointsDisplay');

// Timer display
const timerDisplay = document.createElement('div');
timerDisplay.id = 'timerDisplay';
timerDisplay.innerText = `Time left: ${timer} seconds`;
document.getElementById('clicker').appendChild(timerDisplay);

// Function to update the game state
document.getElementById('clicker').addEventListener('click', function() {
  if (isGameActive) {
    points++;
    pointsDisplay.innerText = `Points: ${points}`;

    // Change the junk item based on points
    if (points % 20 === 0 && points / 20 < junkItems.length) {
      junkImage.src = junkItems[points / 20];
    }
  }
});

// Function to start the game timer
function startGame() {
  if (!isGameActive) {
    isGameActive = true;

    const countdown = setInterval(() => {
      timer--;
      timerDisplay.innerText = `Time left: ${timer} seconds`;

      if (timer <= 0) {
        clearInterval(countdown);
        isGameActive = false;  // Disable clicking after time is up
        timerDisplay.innerText = "Time's up! You can't click anymore.";
      }
    }, 1000);  // Update every second
  }
}

// Start game when the user clicks for the first time
document.getElementById('clicker').addEventListener('click', startGame);
