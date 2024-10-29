import { celulares } from "./services/cell.js";

const productos = [...celulares]; 

window.addEventListener('DOMContentLoaded', () => makeCards(productos));

function makeCards(array) {
    const container = document.querySelector('main .c');
    container.innerHTML = '';
    array.forEach(element => makeCard(element));
}

function makeCard(card) {
    const container = document.createElement('div');
    container.classList.add('product-card');

    const titleCard = document.createElement('h2');
    titleCard.classList.add('product-title');
    titleCard.textContent = card.title;

    const imgCard = document.createElement('img');
    imgCard.src = card.img;
    imgCard.alt = card.title;
    imgCard.classList.add('product-img');

    const price = document.createElement('p');
    price.classList.add('product-price');
    price.textContent = `$${card.price.toLocaleString()}`; 

    const buttonAddCart = document.createElement('button');
    buttonAddCart.textContent = 'Add to Cart';
    buttonAddCart.classList.add('add-to-cart');

    container.appendChild(imgCard);
    container.appendChild(titleCard);
    container.appendChild(price);
    container.appendChild(buttonAddCart);

    document.querySelector('main .c').appendChild(container); 
}


document.getElementById('product-file').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('product-img').value = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});


document.getElementById('add-product-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('product-title').value;
    const imageUrl = document.getElementById('product-img').value;
    const price = parseFloat(document.getElementById('product-price').value);
    const newProduct = {
        title,
        img: imageUrl || 'default.jpg', 
        price
    };

    productos.push(newProduct);
    makeCards(productos);

    event.target.reset();
    document.getElementById('add-product').classList.add('hidden');
});
