let cart = [];


function addToCart(product) {
    const existingProduct = cart.find(item => item.title === product.title);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    renderCart();
}


function renderCart() {
    const cartTable = document.getElementById('cart-items');
    cartTable.innerHTML = '';

    let totalPrice = 0;

    cart.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.title}</td>
            <td>$${item.price}</td>
            <td>${item.quantity}</td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
            <td><button onclick="removeFromCart('${item.title}')">Eliminar</button></td>
        `;
        totalPrice += item.price * item.quantity;
        cartTable.appendChild(row);
    });

    document.getElementById('total-price').textContent = `Total: $${totalPrice.toFixed(2)}`;
}


function removeFromCart(title) {
    cart = cart.filter(item => item.title !== title);
    renderCart();
}


document.getElementById('add-product-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('product-title').value;
    const imgURL = document.getElementById('product-img').value;
    const imgFile = document.getElementById('product-file').files[0];
    const price = parseFloat(document.getElementById('product-price').value);

    
    let imgSrc = imgURL;
    if (imgFile) {
        imgSrc = URL.createObjectURL(imgFile); 
    }

    const newProduct = { title, img: imgSrc, price };
    celulares.push(newProduct); 
    makeCard(newProduct, document.getElementById('product-container'));

    closeModal('add-product-modal');
    document.getElementById('add-product-form').reset();
});


function toggleCart() {
    toggleModal('cart-modal');
}
