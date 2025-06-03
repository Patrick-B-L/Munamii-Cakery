function renderProducts() {
  // Cupcakes
  const cupcakeList = document.querySelector('.cupcakes ul');
  cupcakes.forEach(cupcake => {
    const li = document.createElement('li');
    li.innerHTML = `
      <h2 class="title">${cupcake.title}</h2>
      <img src="${cupcake.img}" alt="${cupcake.title}">
      <h4>${cupcake.price}</h4>
      <button class="add-to-cart-btn" data-title="${cupcake.title}" data-price="${cupcake.price}" data-img="${cupcake.img}">Add to cart</button>
    `;
    cupcakeList.appendChild(li);
  });

  // Wedding Cakes
  const weddingCakeList = document.querySelector('.weddingCakes ul');
  weddingCakes.forEach(cake => {
    const li = document.createElement('li');
    li.innerHTML = `
      <h2 class="title">${cake.title}</h2>
      <img src="${cake.img}" alt="${cake.title}">
      <h4>${cake.price}</h4>
      <button class="add-to-cart-btn" data-title="${cake.title}" data-price="${cake.price}" data-img="${cake.img}">Add to cart</button>
    `;
    weddingCakeList.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', renderProducts);