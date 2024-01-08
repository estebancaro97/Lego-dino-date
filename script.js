const yesOption = document.getElementById('yes');
const noOption = document.getElementById('no');
 
function moveNoOption() {
  const randomX = Math.random() * (window.innerWidth - 100);
  const randomY = Math.random() * (window.innerHeight - 100);
 
noOption.style.left = `${randomX}px`;
noOption.style.top = `${randomY}px`;
}
 
noOption.addEventListener('click', moveNoOption);
noOption.addEventListener('mouseenter', moveNoOption);
 
yesOption.addEventListener('click', () => {
  alert("¡Ya que insistes, tenemos una cita el 19 de enero, te amo cansona :P!");
});