import { getProductByCategory, isUserLoggedIn, productContent } from "../services/product-services.js";

const consolas = document.querySelector('.consolas');
const diversos = document.querySelector('.diversos');
const starWars = document.querySelector('.star-wars');
const loginBtnLink = document.querySelector('.login-acceso');

const showProductContent = async (category, querySelector) => {
    const data = await getProductByCategory(category);
    
    data.forEach(element => { 
        console.log(element);
        const newProduct = productContent(element);
        querySelector.innerHTML += newProduct;
    });
}

showProductContent("Star Wars", starWars);
showProductContent("Consolas", consolas);
showProductContent("Diversos", diversos);

const user = isUserLoggedIn();
const loginBtnContent = `<a href="/pages/login.html" class="login-btn">Login</a>`;

if (!user) {
    loginBtnLink.innerHTML = loginBtnContent;
} else {
    loginBtnLink.innerHTML = user.email;
}