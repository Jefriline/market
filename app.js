import { celulares } from "./celulares";


window.addEventListener('DOMContentLoaded', () => makeCards(celulares));


function makeCards(array) {
    array.forEach(element => {
        makeCard(element)
    });
}


function makeCard(card) {
    const container = document.createElement('div');
    container.classList.add('product-card');

    const titleCard = document.createElement('h2');
    container.classList.add('product-title');
    titleCard.textContent = card.title;
    
    const imgCard = document.createElement('img');
    imgCard.src = card.img;
    imgCard.alt = card.description;
    imgCard.classList.add('product-img');
    
    const price = document.createElement('p');
    precio.classList.add('product-price');
    descriptionCard.textContent = card.price;
    
    const buttonAddCart = document.createElement('button');
    buttonAddCart.textContent = 'Add to Cart';
    buttonAddCart.classList.add('add-to-cart');
    

    container.appendChild(imgCard);
    container.appendChild(titleCard);
    container.appendChild(price);
    container.appendChild(buttonAddCart);

    document.querySelector('main').appendChild(container);
}