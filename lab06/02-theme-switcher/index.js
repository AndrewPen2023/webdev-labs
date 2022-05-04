const changeClass = ev => document.querySelector("body").className = ev.target.id;

document.querySelector("#default").addEventListener('click', changeClass);
document.querySelector("#ocean").addEventListener('click', changeClass);
document.querySelector("#desert").addEventListener('click', changeClass);
document.querySelector("#high-contrast").addEventListener('click', changeClass);
