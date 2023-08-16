import { addProduct } from "../services/product-services.js";

const btn = document.querySelector('.add-btn');
const productName = document.querySelector('input[name="name"]');
const image = document.querySelector('input[name="image"]');
const price = document.querySelector('input[name="price"]');
const type = document.querySelector('input[name="category"]');
const desc = document.querySelector('.desc');

let nameValue = '', imageValue = '', priceValue = '', typeValue = '', descValue = '';
let data = {};

productName.addEventListener('input', (event) => {
    nameValue = event.target.value;
    updateData();
});

image.addEventListener('input', (event) => {
    imageValue = event.target.value;
    updateData();
});

price.addEventListener('input', (event) => {
    priceValue = event.target.value;
    updateData();
});

type.addEventListener('input', (event) => {
    typeValue = event.target.value;
    updateData();
});

desc.addEventListener('input', (event) => {
    descValue = event.target.value;
    updateData();
});

function updateData() {
    data = {
        name: nameValue,
        image: imageValue,
        price: priceValue,
        type: typeValue,
        desc: descValue,
    };
}

btn.addEventListener('click', async (event) => { 
    event.preventDefault();
    if (nameValue === '' || priceValue === '' || imageValue === '' || typeValue === '' || descValue === '') {
        alert("Todos los campos son obligatorios");
    } else {
        await addProduct(data);
        window.location.href = '../pages/productos.html';
    }
});