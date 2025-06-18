const overlay = document.getElementById("visit-overlay");
const messageText = document.getElementById("visit-message-text");
const closeBtn = document.getElementById("visit-close-btn");

const currentVisit = Date.now();
const lastVisit = localStorage.getItem("lastVisit");

let message = "";

if (!lastVisit) {
  message = "Welcome! Let us know if you have any questions.";
} else {
  const msInADay = 1000 * 60 * 60 * 24;
  const diff = currentVisit - Number(lastVisit);
  const days = Math.floor(diff / msInADay);

  if (days < 1) {
    message = "Back so soon! Awesome!";
  } else if (days === 1) {
    message = "You last visited 1 day ago.";
  } else {
    message = `You last visited ${days} days ago.`;
  }
}

// Show message if available
if (message) {
  messageText.textContent = message;
  overlay.style.display = "block";
}

// Close button handler
closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});

// Update last visit
localStorage.setItem("lastVisit", currentVisit);
