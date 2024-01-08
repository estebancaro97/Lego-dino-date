const yesOption = document.getElementById('yes');
const noOption = document.getElementById('no');
 
noOption.addEventListener('click', () => {
  noOption.classList.add('clicked');
});
 
noOption.addEventListener('mouseenter', () => {
  const randomX = Math.random();
  const randomY = Math.random();
 
noOption.style.setProperty('--random-x', randomX);
noOption.style.setProperty('--random-y', randomY);
});
 
noOption.addEventListener('transitionend', () => {
  if (noOption.classList.contains('clicked')) {
    noOption.classList.remove('clicked');
  }
});
 
yesOption.addEventListener('click', () => {
  alert("¡Yo te dino-amo más!");
});
