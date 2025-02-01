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