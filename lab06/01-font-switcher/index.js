const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const sizeInt = 2;

const makeBigger = () => {
   h1.style.fontSize = incFont(getComputedStyle(h1).getPropertyValue('font-size'), sizeInt);
   p.style.fontSize = incFont(getComputedStyle(p).getPropertyValue('font-size'), sizeInt);
};

const makeSmaller = () => {
   h1.style.fontSize = incFont(getComputedStyle(h1).getPropertyValue('font-size'), -sizeInt);
   p.style.fontSize = incFont(getComputedStyle(p).getPropertyValue('font-size'), -sizeInt);
};

const incFont = (initialSize, change) => parseFloat(initialSize) + change + 'px';


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);
