// Game variables
let points = 0;
const junkItems = [
  'dorito.png',  // Replace with your junk food images
  'burger.png',
  'pizza.png',
  'fries.png',
  'soda.png'
];

// Display the junk item
const junkImage = document.createElement('img');
junkImage.src = junkItems[0]; // Start with Dorito
junkImage.alt = "Junk Item";
junkImage.style.width = '100px';  // Adjust size as necessary
document.getElementById('clicker').appendChild(junkImage);

// Function to update the game state
document.getElementById('clicker').addEventListener('click', function() {
  points++;
  document.getElementById('pointsDisplay').innerText = `Points: ${points}`;
  
  // Change the junk item based on points
  if (points % 20 === 0 && points / 20 < junkItems.length) {
    junkImage.src = junkItems[points / 20];
  }
});
