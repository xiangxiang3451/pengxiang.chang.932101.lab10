const curtain = document.getElementById('curtain');
const lamp = document.getElementById('lamp');
const hang = document.querySelector('.hang');
const content = document.querySelector('.content');
const rabbit = document.querySelector('.rabbit');
const pigeon = document.querySelector('.pigeon');

function changeAnimal() {

    rabbit.classList.toggle('putInHat');

    pigeon.classList.toggle('putInHat');


}

curtain.addEventListener('click', () => {

    curtain.style.transform = 'translateY(-100%)';
    curtain.style.transition = 'transform 1s';
});

lamp.addEventListener('mousedown', () => {
    hang.style.transform = 'translateY(5px)';
});

lamp.addEventListener('mouseup', () => {
    hang.style.transform = 'translateY(0px)';
});

lamp.addEventListener('click', () => {
    content.classList.toggle('hidden');
});