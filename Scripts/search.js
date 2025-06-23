const searchPopupPath = location.pathname.endsWith('index.html') || location.pathname === '/' 
  ? 'Home/search-popup.html' 
  : 'search-popup.html';

fetch(searchPopupPath)
  .then(res => res.text())
  .then(data => {
    document.getElementById('search-popup-placeholder').innerHTML = data;

    // Example data: You can expand this with more pages/products
    const searchableItems = [
      // Automatically generated from products-data.js
      ...cupcakes.map(c => ({ type: "product", name: c.title, url: "products.html#" + c.title.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9\-]/g, '').toLowerCase() })),
      ...weddingCakes.map(c => ({ type: "product", name: c.title, url: "products.html#" + c.title.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9\-]/g, '').toLowerCase() })),
      // Manually added pages
      { type: "page", name: "About", url: "about.html" },
      { type: "page", name: "Contact", url: "contact.html" },
      { type: "page", name: "Home", url: "../index.html" },
      { type: "page", name: "Checkout", url: "checkout.html" },
      { type: "page", name: "Products", url: "products.html" }
    ];

    // Open popup
    document.addEventListener('click', function(e) {
      if (e.target.id === 'open-search' || e.target.closest('#open-search')) {
        e.preventDefault();
        document.getElementById('search-popup').style.display = 'flex';
        document.getElementById('search-input').focus();
      }
    });

    // Close popup
    document.getElementById('search-popup-close').addEventListener('click', function() {
      document.getElementById('search-popup').style.display = 'none';
      document.getElementById('search-input').value = '';
      document.getElementById('search-results').innerHTML = '';
    });
    document.getElementById('search-results').addEventListener('click', function(e) {
      if (e.target.tagName === 'A') {
        document.getElementById('search-popup').style.display = 'none';
        document.getElementById('search-input').value = '';
        document.getElementById('search-results').innerHTML = '';
      }
    });
    document.getElementById('search-popup').addEventListener('click', function(e) {
      if (e.target === this) {
        this.style.display = 'none';
        document.getElementById('search-input').value = '';
        document.getElementById('search-results').innerHTML = '';
      }
    });

    // Search logic
    document.getElementById('search-input').addEventListener('input', function() {
      const query = this.value.toLowerCase();
      const results = searchableItems.filter(item =>
        item.name.toLowerCase().includes(query)
      );
      const resultsList = document.getElementById('search-results');
      resultsList.innerHTML = results.length
        ? results.map(item => `<li><a href="${item.url}">${item.name}</a></li>`).join('')
        : '<li>No results found.</li>';
    });
});