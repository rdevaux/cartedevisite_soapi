// Gestion de la navbar

const btn = document.querySelector('.btn1');
const menu = document.querySelector('.liste-nav');

btn.addEventListener('click', () => btn.classList.toggle('active'));
btn.addEventListener('click', () => menu.classList.toggle('active-menu'));

// Affichage/Masquage du btn-up

const btnUP = document.querySelector('#btn-up');

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    // console.log(scroll);

    if(scroll < 650) btnUP.style.display = "none";
    else btnUP.style.display = "flex";
});