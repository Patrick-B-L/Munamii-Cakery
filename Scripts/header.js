// Load the header from header.html and insert it into the page
fetch('header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;

    // Add event listeners after header is loaded
    
    // Toggle the menu when hamburger is clicked
    document.querySelector('.hamburger').addEventListener('click', function() {
      document.querySelector('.linkArea').classList.toggle('active');
    });

    // Close the menu when hamburger-btn (X) is clicked
    document.querySelector('.hamburger-close').addEventListener('click', function() {
      document.querySelector('.linkArea').classList.remove('active');
    });

      let lastScroll = 0;
const header = document.querySelector('.headerBackground');

window.addEventListener('scroll', function() {
    const cartPopupOpen = document.getElementById('cart-popup')?.style.display === 'flex';
    const menuOpen = document.querySelector('.linkArea')?.classList.contains('active');
    if (cartPopupOpen || menuOpen) {
        return;
    }
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScroll && currentScroll > 50) {
        // Scrolling down
        header.classList.add('hide-header');
    } else {
        // Scrolling up
        header.classList.remove('hide-header');
    }
    lastScroll = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});
    if (typeof updateCartCount === 'function') {
        updateCartCount();
    }
  });

