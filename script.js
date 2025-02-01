// Get DOM Elements
const downButton = document.getElementById('downButton');
const popup = document.getElementById('popup');
const closePopup = document.querySelector('.close');
const discoverButton = document.getElementById('discoverButton');
const newLayout = document.getElementById('newLayout');
const mainContent = document.querySelector('.main-content');
const dynamicContent = document.getElementById('dynamicContent');

// Show Popup on Down Button Click
downButton.addEventListener('click', () => {
  popup.style.display = 'flex';
  console.log("okok");
});

// Close Popup
closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Change Content on Discover Button Click
discoverButton.addEventListener('click', () => {
  // Hide Main Content
  mainContent.style.display = 'none';

  // Show New Layout
  newLayout.style.display = 'flex';

  // Load New Content Using AJAX (Example: Load an Image)
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'new-content.html', true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      dynamicContent.src = 'new-image.jpg'; // Replace with your image or video
    }
  };
  xhr.send();
});

document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("bg-music");
    const musicButton = document.getElementById("upButton");

    let isPlaying = true; // Start with music playing

    // Try to autoplay (Some browsers may block it without user interaction)
    music.play().then(() => {
        musicButton.style.filter = "brightness(1)"; // Normal brightness when playing
    }).catch(() => {
        isPlaying = false; // If autoplay fails, set it as paused
        musicButton.style.filter = "brightness(0.5)"; // Grey if blocked
    });

    musicButton.addEventListener("click", function () {
        if (isPlaying) {
            music.pause();
            musicButton.style.filter = "brightness(0.5)"; // Make button grey when paused
        } else {
            music.play();
            musicButton.style.filter = "brightness(1)"; // Normal brightness when playing
        }
        isPlaying = !isPlaying;
    });
});
