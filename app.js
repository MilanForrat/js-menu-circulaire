const btnCircle = document.getElementsByClassName('btn-circle')[0];
const circleMenu = document.getElementsByClassName('circle-menu')[0];

btnCircle.addEventListener('click', () => {
    btnCircle.classList.toggle('menu-anim');
    circleMenu.classList.toggle('circle-anim');
})