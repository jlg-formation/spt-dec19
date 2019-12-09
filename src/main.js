import './style.css';

const body = document.querySelector("body");
console.log('body: ', body);
const h1 = document.createElement('h1');
h1.innerHTML = 'kiki';
body.appendChild(h1);
console.log('coucou');
