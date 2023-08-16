import { v4 as uuidv4 } from '../node_modules/uuid/dist/esm-browser/index.js';

export const userLogin = async (email, password) => {
    const uniqueId = uuidv4();
    const response = await fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id: uniqueId, email, password })
    });
    
    if (response.ok) {
        console.log("User registered successfully!");
    } else {
        console.error("User registration failed.");
    }
}