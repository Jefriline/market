

let cartItems = []; 

export function addToCart(product) {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cartItems.push({ ...product, quantity: 1 });
    }
    updateCartTotal();
    renderCartItems();
}


export function removeFromCart(productId) {
    cartItems = cartItems.filter(item => item.id !== productId);
    updateCartTotal();
    renderCartItems();
}


export function updateQuantity(productId, newQuantity) {
    const product = cartItems.find(item => item.id === productId);
    if (product) {
        product.quantity = newQuantity;
    }
    updateCartTotal();
    renderCartItems();
}


function updateCartTotal() {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    document.getElementById('total-price').textContent = `Total: $${total.toFixed(2)}`;
}


function renderCartItems() {
    const cartTableBody = document.getElementById('cart-items');
    cartTableBody.innerHTML = ''; 

   
    cartItems.forEach(item => {
        const row = document.createElement('tr');

        const titleCell = document.createElement('td');
        titleCell.textContent = item.title; 
        row.appendChild(titleCell);

        const priceCell = document.createElement('td');
        priceCell.textContent = `$${item.price.toFixed(2)}`; 
        row.appendChild(priceCell);

        const quantityCell = document.createElement('td');
        const quantityInput = document.createElement('input');
        quantityInput.classList.add('quantity-input');
        quantityInput.type = 'number';
        quantityInput.value = item.quantity;
        quantityInput.min = 1;
        quantityInput.addEventListener('change', () => updateQuantity(item.id, parseInt(quantityInput.value)));
        quantityCell.appendChild(quantityInput);
        row.appendChild(quantityCell);

        const subtotalCell = document.createElement('td');
        subtotalCell.textContent = `$${(item.price * item.quantity).toFixed(2)}`; 
        row.appendChild(subtotalCell);

        const actionCell = document.createElement('td');
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-from-cart');
        removeButton.addEventListener('click', () => removeFromCart(item.id));
        actionCell.appendChild(removeButton);
        row.appendChild(actionCell);

        cartTableBody.appendChild(row);
    });
}



export function clearCart() {
    cartItems = [];
    updateCartTotal();
    renderCartItems();
}


export function checkout() {
    if (cartItems.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    alert('Purchase successful!');
    clearCart();
}


