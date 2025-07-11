    // Render various items in the cart
    function renderCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const list = document.getElementById('cart-list');
        const total = document.getElementById('cart-total');
        list.innerHTML = '';
        let sum = 0;
        cart.forEach(item => {
            const price = parseFloat(item.price.replace('$',''));
            sum += price * item.qty;
            list.innerHTML += `<li>
                <div class = "cart-img-wrap">
                    <img src="${item.img}" alt="${item.title}">
                </div>
                <div class = "cart-title">
                ${item.title}
                </div>
                <div class = "cart-remove-1-btn"> 
                <button class="qty-btn" data-title="${item.title}" data-delta="-1">-</button>
                </div>
                <div class = "cart-qty">Quantity:
                ${item.qty}
                </div>
                <div class = "cart-add-1-btn">
                <button class="qty-btn" data-title="${item.title}" data-delta="1">+</button>
                </div>
                <div class = "cart-price-item">
                <span>${item.price}</span>
                </div>
                <div class = "cart-remove-btn">
                <button class="remove-btn" data-title="${item.title}" title="Remove">
                    <i class="fa-solid fa-trash"></i>
                </button>
                </div>
            </li>`;
        });
        total.textContent = 'Total: $' + sum.toFixed(2);
    }

     
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('qty-btn')) {
            const title = e.target.dataset.title;
            const delta = parseInt(e.target.dataset.delta, 10);
            window.changeQty(title, delta);
            renderCart();
        }
        if (e.target.classList.contains('remove-btn')) {
            const title = e.target.dataset.title;
            showConfirmPopup('Are you sure you want to remove this item from the cart?', function() {
            window.removeFromCart(title);
            renderCart();
            });
        }
    });

    // Event listener for the order form submission
    document.getElementById('order-form').addEventListener('submit', function(e) {
        e.preventDefault();
        localStorage.removeItem('cart');
        renderCart();
        document.getElementById('cart-count').textContent = '0';
        document.getElementById('order-message').textContent = 'Thank you for your order!';
        this.reset();
    });

    document.addEventListener('DOMContentLoaded', renderCart);