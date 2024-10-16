let points = 0;
let items = ["dorito.png", "burger.png", "pizza.png", "fries.png"]; // Add more images if needed
let currentItemIndex = 0;
const thresholds = [20, 40, 60, 80]; // Change item at these points

window.addEventListener('load', function() {
    // Detect when the site is added to home screen and trigger game view
    window.addEventListener('beforeinstallprompt', (e) => {
        e.prompt(); // Prompt the user to add to home screen
    });

    if (window.matchMedia('(display-mode: standalone)').matches) {
        // The app is running in standalone mode, show the game
        document.getElementById('content').style.display = 'none';
        document.getElementById('game').style.display = 'block';
    } else {
        // Show the alert when running as a website
        document.getElementById('startGame').addEventListener('click', () => {
            alert('You can add this site to your home screen to play the game!');
        });
    }

    // Game logic
    const junkItem = document.getElementById('junk-item');
    const pointsDisplay = document.getElementById('points');

    junkItem.addEventListener('click', function() {
        points++;
        pointsDisplay.textContent = points;

        // Check if we need to swap the junk item
        if (thresholds.includes(points)) {
            currentItemIndex = (currentItemIndex + 1) % items.length;
            junkItem.src = items[currentItemIndex];
        }
    });
});
