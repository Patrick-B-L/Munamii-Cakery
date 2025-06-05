function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}
function setCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}
function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    const el = document.getElementById('cart-count');
    if (el) el.textContent = count;
}
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
function removeFromCart(title) {
    let cart = getCart();
    cart = cart.filter(item => item.title !== title);
    setCart(cart);
    updateCartCount();
}
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

// Event delegation för "Lägg till i kundvagn"
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart-btn')) {
        const btn = e.target;
        addToCart({
            title: btn.dataset.title,
            price: btn.dataset.price,
            img: btn.dataset.img
        });
                // Byt text tillfälligt
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