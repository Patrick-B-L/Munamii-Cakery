// Cupcake images
const cupcakeImages = [
  "../images/cc1.jpg",
  "../images/cc2.jpg",
  "../images/cc3.jpg",
  "../images/cc4.jpg",
  "../images/cc5.jpg",
  "../images/cc6.jpg",
  "../images/cc7.jpg",
  "../images/cc8.jpg"
];

// Wedding cake images
const weddingCakeImages = [
  "../images/wec1.jpg",
  "../images/wec2.jpg",
  "../images/wec3.jpg",
  "../images/wec4.jpg",
  "../images/wec5.jpg",
  "../images/wec6.jpg",
  "../images/wec7.jpg",
  "../images/wec8.jpg"
];

// Indexes to track current image
let cupcakeIndex = 0;
let weddingCakeIndex = 0;

// Function to show next cupcake image
function showNextCupcake() {
  const img = document.getElementById("cupcake-img");
  const carousel = document.getElementById("cupcake-carousel");
  img.classList.add("fade-out");
  carousel.classList.add("no-shadow");
  setTimeout(() => {
    cupcakeIndex = (cupcakeIndex + 1) % cupcakeImages.length;
    img.src = cupcakeImages[cupcakeIndex];
    img.classList.remove("fade-out");
    carousel.classList.remove("no-shadow");
  }, 700);
}
// Function to show next wedding cake image

function showNextWeddingCake() {
  const img = document.getElementById("weddingcake-img");
  const carousel = document.getElementById("weddingcake-carousel");
  img.classList.add("fade-out");
  carousel.classList.add("no-shadow");
  setTimeout(() => {
    weddingCakeIndex = (weddingCakeIndex + 1) % weddingCakeImages.length;
    img.src = weddingCakeImages[weddingCakeIndex];
    img.classList.remove("fade-out");
    carousel.classList.remove("no-shadow");
  }, 700);
}

// Start the carousels
setInterval(showNextCupcake, 5000);
setInterval(showNextWeddingCake, 5000);