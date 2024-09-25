// Get the carousel wrapper and navigation buttons
const carouselWrapper = document.querySelector(".carousel-wrapper");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// Set the initial translateX value
let translateX = 0;

// Set the carousel item width
const itemWidth = carouselWrapper.children[0].offsetWidth;

// Calculate the total width of all images
const totalItems = carouselWrapper.children.length;
const totalWidth = totalItems * itemWidth;

// Clone the first and last images
const firstImage = carouselWrapper.children[0].cloneNode(true);
const lastImage = carouselWrapper.children[totalItems - 1].cloneNode(true);

// Append cloned first image to the end and cloned last image to the beginning
carouselWrapper.appendChild(firstImage);
carouselWrapper.insertBefore(lastImage, carouselWrapper.children[0]);

// Update total width after adding cloned nodes
const updatedTotalItems = carouselWrapper.children.length;
const updatedTotalWidth = updatedTotalItems * itemWidth;

// Set initial position to the first actual item (skip cloned last image)
translateX = -itemWidth;
carouselWrapper.style.transform = `translateX(${translateX}px)`;

// Helper function to move the carousel
const moveCarousel = () => {
  carouselWrapper.style.transform = `translateX(${translateX}px)`;
  carouselWrapper.style.transition = "transform 0.4s ease";
};

// Add event listeners to navigation buttons
prevBtn.addEventListener("click", () => {
  translateX += itemWidth;
  moveCarousel();

  if (translateX >= 0) {
    setTimeout(() => {
      translateX = -(updatedTotalWidth - 2 * itemWidth); // Move to last actual item
      carouselWrapper.style.transition = "none";
      moveCarousel();
    }, 400);
  }
});

nextBtn.addEventListener("click", () => {
  translateX -= itemWidth;
  moveCarousel();

  if (translateX <= -(updatedTotalWidth - itemWidth)) {
    setTimeout(() => {
      translateX = -itemWidth; // Move to first actual item
      carouselWrapper.style.transition = "none";
      moveCarousel();
    }, 400);
  }
});

// Auto-scrolling functionality
setInterval(() => {
  nextBtn.click();
}, 3500); // 3.5 seconds

// Reset transition for instant position change
carouselWrapper.addEventListener("transitionend", () => {
  carouselWrapper.style.transition = "transform 4s ease";
});

//
// js code for the sign in popup
// trigger onClick
//

const signInButton = document.getElementById("signInButton");
const popupContainer = document.getElementById("popupContainer");
const citizenButton = document.getElementById("citizenButton");
const adminButton = document.getElementById("adminButton");

signInButton.addEventListener("click", () => {
  popupContainer.classList.remove("hidden");
});

citizenButton.addEventListener("click", () => {
  window.location.href = "citizenLogin.html";
  popupContainer.classList.add("hidden");
});

adminButton.addEventListener("click", () => {
  window.location.href = "adminLogin.html";
  popupContainer.classList.add("hidden");
});

// Close popup when clicking outside
document.addEventListener("click", (e) => {
  if (e.target === popupContainer) {
    popupContainer.classList.add("hidden");
  }
});
