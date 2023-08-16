import { getAllProducts, isUserLoggedIn, productContent } from "../services/product-services.js";

const productContainer = document.querySelector('.producto-lists');
const addBtnLink = document.querySelector('.produto-title');

getAllProducts().then(products => {
    products.forEach(element => { 
        const newProduct = productContent(element);
        productContainer.innerHTML += newProduct;
    });
}).catch(err => console.log(err));

const user = isUserLoggedIn();
const btnContent = `<a href="/pages/agregar.html" class="contact-btn">Agregar productos</a>`;

if (user) addBtnLink.innerHTML += btnContent;