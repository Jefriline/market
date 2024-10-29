
export function viewHiddenSection(id) {
    const section = document.getElementById(id);

    section.classList.toggle('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.cart-btn').addEventListener('click', () => {
        viewHiddenSection('cart');
    });
    document.querySelector('.add-product-btn').addEventListener('click', () => {
        viewHiddenSection('add-product');
    });
    document.querySelector('#closeCart').addEventListener('click', () => {
        viewHiddenSection('cart');
    });
    document.querySelector('#closeAdd').addEventListener('click', () => {
        viewHiddenSection('add-product');
    });
});