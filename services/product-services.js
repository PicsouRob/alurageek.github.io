import { v4 as uuidv4 } from '../node_modules/uuid/dist/esm-browser/index.js';

export const getAllProducts = async () => {
     const data = await fetch('https://picsourob.github.io/alurageek.github.io/products', {
         headers: {
             "Content-Type": "application/json",
        }
     });
     
    const response = data.json();
    
    return response;
}

export const getProductById = async (id) => {
    const data = await fetch(`https://picsourob.github.io/alurageek.github.io/products/${id}`);
     
    const response = data.json();
    
    return response;
}

export const addProduct = async (data) => {
    const uniqueId = uuidv4();
    const response = await fetch('https://picsourob.github.io/alurageek.github.io/products', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id: uniqueId, ...data })
    });
    
    if (response.ok) {
        console.log("Product added successfully!");
    } else {
        console.error("Product insertion failed.");
    }
}

export const productContent = ({ name, price, id, image }) => {
    const content = `
        <div key='${id}' class="produto-row">
            <img class="images-view" src='../${image}' alt='${id}' />
            <p>${name}</p>
            <p>${price}</p>
            <a style="color: blue; text-decoration: underline;" href="../pages/descripcion.html?id=${id}" class="">Ver producto</a>
        </div>
    `;
    
    return content;
}

export const getProductByCategory = async (productType) => {
    try {
        const response = await fetch(`https://picsourob.github.io/alurageek.github.io/products?type=${productType}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const products = await response.json();
        return products;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};

export const isUserLoggedIn = () => {
    const user = JSON.parse(window.localStorage.getItem('user'));
    
    return user;
}