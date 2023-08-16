import { userLogin } from '../services/login-services.js';

const email = document.querySelector('.email');
const password = document.querySelector('.password');
const loginBotton = document.querySelector('.login-button');
let emailValue, passwordValue;

email.addEventListener('input', (event) => {
    emailValue = event.target.value;
});

password.addEventListener('input', (event) => {
    passwordValue = event.target.value;
});

loginBotton.addEventListener('click', async (event) => {
    event.preventDefault();
    console.log('email: ' + emailValue);
    console.log('password: ' + passwordValue);
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    if (emailValue === '' || passwordValue === '') {
        alert('Todos los son obligatorio o el correo debe ser correcto');
    } else if (!emailPattern.test(emailValue)) {
        alert('Correo electronico incprrecto');
    } else {
        await userLogin(emailValue, passwordValue);
        const userData = {
            email: emailValue,
            password: passwordValue
        }
        
        window.localStorage.setItem('user', JSON.stringify(userData));
        window.location.href = '../pages/productos.html';
    }
});