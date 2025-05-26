// Cupcake images
const cupcakeImages = [
  "images/cc1.jpg",
  "images/cc2.jpg",
  "images/cc3.jpg",
  "images/cc4.jpg",
  "images/cc5.jpg",
  "images/cc6.jpg",
  "images/cc7.jpg",
  "images/cc8.jpg"
];

// Wedding cake images
const weddingCakeImages = [
  "images/wec1.jpg",
  "images/wec2.jpg",
  "images/wec3.jpg",
  "images/wec4.jpg",
  "images/wec5.jpg",
  "images/wec6.jpg",
  "images/wec7.jpg",
  "images/wec8.jpg"
];

let cupcakeIndex = 0;
let weddingCakeIndex = 0;

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
// function showNextCupcake() {
//   const img = document.getElementById("cupcake-img");
//   img.classList.add("fade-out");
//   setTimeout(() => {
//     cupcakeIndex = (cupcakeIndex + 1) % cupcakeImages.length;
//     img.src = cupcakeImages[cupcakeIndex];
//     img.classList.remove("fade-out");
//   }, 700); // matchar transition-tiden i CSS
// }
// function showNextCupcake() {
//   cupcakeIndex = (cupcakeIndex + 1) % cupcakeImages.length;
//   document.getElementById("cupcake-img").src = cupcakeImages[cupcakeIndex];
// }

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

// function showNextWeddingCake() {
//   const img = document.getElementById("weddingcake-img");
//   img.classList.add("fade-out");
//   setTimeout(() => {
//     weddingCakeIndex = (weddingCakeIndex + 1) % weddingCakeImages.length;
//     img.src = weddingCakeImages[weddingCakeIndex];
//     img.classList.remove("fade-out");
//   }, 700);
// }

// function showNextWeddingCake() {
//   weddingCakeIndex = (weddingCakeIndex + 1) % weddingCakeImages.length;
//   document.getElementById("weddingcake-img").src = weddingCakeImages[weddingCakeIndex];
// }

// Byt bild var 2,5 sekund
setInterval(showNextCupcake, 5000);
setInterval(showNextWeddingCake, 5000);