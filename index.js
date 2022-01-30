const menu = document.querySelector('.toggle');
const btn = document.querySelector('.tog');
const container = document.querySelector('.container');

menu.addEventListener('click', () => {
menu.classList.toggle('active');
container.classList.toggle('active');
})


btn.addEventListener('click', () => {
    menu.classList.toggle('active');
    container.classList.toggle('active');
    })

