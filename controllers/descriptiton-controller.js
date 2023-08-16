import { getProductByCategory, getProductById, productContent } from "../services/product-services.js";

const queryParam = new URLSearchParams(window.location.search);
const id = queryParam.get('id');

const getProductContent = ({ name, price, id, image, desc }) => {
    const content = `
        <div class="descripcion" key="${id}">
            <img src="../${image}" alt="" class="" />
            <div class="text-descripcion">
                <h1 class="">${name}</h1>
                <p class="precio">${price}</p>
                <p class="">${desc}</p>
            </div>
        </div>
    `;
    
    return content;
}

const description = document.querySelector('.description-container');
const similarProduct = document.querySelector('.producto-grid');

const productDescription = async () => {
    try {
        const data = await getProductById(id);
        const newContent = getProductContent(data);
        showProductContent(data);
        description.innerHTML += newContent;
    } catch (error) {
        console.log(error);
    }
}

productDescription();

const showProductContent = async (product) => {
    try {
        const data = await getProductByCategory(product.type);
        
        data
            .filter(item => item.name !== product.name)
            .forEach(element => { 
                const newProduct = productContent(element);
                similarProduct.innerHTML += newProduct;
            });
    } catch (error) {
        console.log(error);
    }
}