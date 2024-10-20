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
