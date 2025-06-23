fetch('Home/cart-popup.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('cart-popup-placeholder').innerHTML = data;

                    document.getElementById('cart-popup').addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });

        // Event delegation for cart link and close button
        document.addEventListener('click', function(e) {
            if (e.target.closest('.cart-link')) {
            e.preventDefault();
            showCartPopup();
            }
            if (e.target.id === 'cart-popup-close') {
            document.getElementById('cart-popup').style.display = 'none';
            }
        });

        

        function showCartPopup() {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const list = document.getElementById('cart-popup-list');
            const total = document.getElementById('cart-popup-total');
            list.innerHTML = '';
            let sum = 0;
            if (cart.length === 0) {
            list.innerHTML = '<li>Your cart is empty.</li>';
            } else {
            cart.forEach(item => {
                const price = parseFloat(item.price.replace('$',''));
                sum += price * item.qty;
                list.innerHTML += 
                `<li>
                    <div class = "cart-popup-img-wrap">
                        <img src="${item.img}" alt="${item.title}">
                    </div>
                    <div>
                        ${item.title}
                    </div> 
                    <div>
                        Qty: ${item.qty}
                    </div>
                    <div>
                        ${item.price}
                    </div>
                </li>`;
            });
            total.textContent = 'Total: $' + sum.toFixed(2);
            }
            document.getElementById('cart-popup').style.display = 'flex';
        }
    });
