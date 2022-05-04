const changeClass = ev => {
  currentClass = document.querySelector("body").className
  console.log(currentClass);
  if (currentClass === '') {
    document.querySelector("body").className = 'dyslexia-mode';
  } else {
    document.querySelector("body").className = '';
  }
};

document.querySelector("#dyslexia-toggle").addEventListener('click', changeClass);