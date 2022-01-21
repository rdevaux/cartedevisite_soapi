const btn = document.querySelector('.btn1');
const menu = document.querySelector('.liste-nav');

btn.addEventListener('click', () => btn.classList.toggle('active'));
btn.addEventListener('click', () => menu.classList.toggle('active-menu'));