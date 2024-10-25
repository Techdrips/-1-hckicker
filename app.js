// Function to check if the app is in standalone mode
function isStandalone() {
  return (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone);
}

// Once the document is loaded, check if the app is in standalone mode
document.addEventListener('DOMContentLoaded', function() {
  const clickerGame = document.getElementById('clicker');
  const addToHomeScreenMsg = document.getElementById('addToHomeScreen');

  if (isStandalone()) {
    // App is running as a standalone PWA
    clickerGame.style.display = 'block';  // Show the game
    addToHomeScreenMsg.style.display = 'none';  // Hide the add-to-home-screen message
  } else {
    // App is running in a browser
    clickerGame.style.display = 'none';  // Hide the game
    addToHomeScreenMsg.style.display = 'block';  // Show the add-to-home-screen message
  }
});

// Game logic (your existing code for the clicker game goes here)
let points = 0;
const junkItems = [
  'dorito.png',  // Replace with your junk food images
  'burger.png',
  'pizza.png',
  'fries.png',
  'soda.png'
];
let points = 0;
let clickerGame = document.getElementById('clicker');
let pointsDisplay = document.getElementById('pointsDisplay');
let aiFoodDisplay = document.createElement('div');  // This will show the AI-created food
aiFoodDisplay.id = "aiFoodDisplay";
document.body.appendChild(aiFoodDisplay);

// Function to check if the app is in standalone mode
function isStandalone() {
  return (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone);
}

document.addEventListener('DOMContentLoaded', function() {
  const addToHomeScreenMsg = document.getElementById('addToHomeScreen');

  if (isStandalone()) {
    clickerGame.style.display = 'block';
    addToHomeScreenMsg.style.display = 'none';
  } else {
    clickerGame.style.display = 'none';
    addToHomeScreenMsg.style.display = 'block';
  }
});

// Array of random food emojis
const foodEmojis = ['🍕', '🍔', '🍎', '🍌', '🍇', '🍓', '🥑', '🍒', '🍩', '🍪'];

// Handle the click event
clickerGame.addEventListener('click', function() {
  if (points < 80) {
    points++;
    pointsDisplay.textContent = `Points: ${points}`;
  }
  
  if (points === 80) {
    generateAICombo();
  }
});

// Function to randomly pick food emojis and combine them
function generateAICombo() {
  const emoji1 = foodEmojis[Math.floor(Math.random() * foodEmojis.length)];
  const emoji2 = foodEmojis[Math.floor(Math.random() * foodEmojis.length)];
  const result = `${emoji1} + ${emoji2} = ${emoji1}${emoji2}`;  // Create the "merged" result
  
  // Display the result on the screen
  aiFoodDisplay.textContent = `AI created food: ${result}`;
  
  // Stop the clicker functionality after AI takes over
  clickerGame.removeEventListener('click', clickerGame);
}
