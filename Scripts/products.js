function renderProducts() {
  // Cupcakes
  const cupcakeList = document.querySelector('.cupcakes ul');
  cupcakes.forEach((cupcake, i) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <h2 class="title">${cupcake.title}</h2>
      <img src="${cupcake.img}" alt="${cupcake.title}" data-type="cupcake" data-index="${i}" title = "Description">
      <h4>${cupcake.price}</h4>
      <button class="add-to-cart-btn" data-title="${cupcake.title}" data-price="${cupcake.price}" data-img="${cupcake.img}">Add to cart</button>
    `;
    cupcakeList.appendChild(li);
  });

  // Wedding Cakes
  const weddingCakeList = document.querySelector('.weddingCakes ul');
  weddingCakes.forEach((cake, i) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <h2 class="title">${cake.title}</h2>
      <img src="${cake.img}" alt="${cake.title}" data-type="wedding" data-index="${i}">
      <h4>${cake.price}</h4>
      <button class="add-to-cart-btn" data-title="${cake.title}" data-price="${cake.price}" data-img="${cake.img}">Add to cart</button>
    `;
    weddingCakeList.appendChild(li);
  });

  // Popup event delegation
  document.querySelectorAll('.cupcakes img, .weddingCakes img').forEach(img => {
    img.style.cursor = "pointer";
    img.addEventListener('click', function() {
      let product;
      if (img.dataset.type === "cupcake") {
        product = cupcakes[parseInt(img.dataset.index)];
      } else {
        product = weddingCakes[parseInt(img.dataset.index)];
      }
      document.getElementById('popup-img').src = product.img;
      document.getElementById('popup-img').alt = product.title;
      document.getElementById('popup-title').textContent = product.title;
      document.getElementById('popup-price').textContent = product.price;
      document.getElementById('popup-desc').textContent = product.desc || "No description available.";
      document.getElementById('product-popup').style.display = 'flex';
    });
  });

  // Stäng popup
  document.getElementById('popup-close').addEventListener('click', function() {
    document.getElementById('product-popup').style.display = 'none';
  });
  document.getElementById('product-popup').addEventListener('click', function(e) {
    if (e.target === this) this.style.display = 'none';
  });
}

document.addEventListener('DOMContentLoaded', renderProducts);