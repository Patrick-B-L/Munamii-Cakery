// Function to get the cart from localStorage
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}
// Function to set the cart in localStorage
function setCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}
// Function to update the cart count displayed on the page
function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    const el = document.getElementById('cart-count');
    if (el) el.textContent = count;
}
// Function to add an item to the cart
function addToCart(product) {
    let cart = getCart();
    const found = cart.find(item => item.title === product.title);
    if (found) {
        found.qty += 1;
    } else {
        cart.push({...product, qty: 1});
    }
    setCart(cart);
    updateCartCount();
}
// Function to remove an item from the cart
function removeFromCart(title) {
    let cart = getCart();
    cart = cart.filter(item => item.title !== title);
    setCart(cart);
    updateCartCount();
}
// Function to change quantity of an item in the cart
function changeQty(title, delta) {
    let cart = getCart();
    const item = cart.find(i => i.title === title);
    if (item) {
        item.qty += delta;
        if (item.qty < 1) removeFromCart(title);
        else setCart(cart);
        updateCartCount();
    }
}

// Event listener for "Add to Cart" buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart-btn')) {
        const btn = e.target;
        addToCart({
            title: btn.dataset.title,
            price: btn.dataset.price,
            img: btn.dataset.img
        });
        // Change button text and disable it for 1.2 seconds
        const originalText = btn.textContent;
        btn.textContent = "Cake Added!";
        btn.disabled = true;
        setTimeout(() => {
            btn.textContent = originalText;
            btn.disabled = false;
        }, 1200); // 1,2 sekunder
    }
});
document.addEventListener('DOMContentLoaded', updateCartCount);