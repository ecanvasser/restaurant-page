import './style.css';
import homeClick from './hometab.js';
import menuClick from './menutab.js';
import contactClick from './contact.js';

const home = document.querySelector('.home');
home.addEventListener('click', (e) => {
    homeClick()
    e.preventDefault();
});

const menu = document.querySelector('.menu');
menu.addEventListener('click', (e) => {
    menuClick()
    e.preventDefault();
});

const contact = document.querySelector('.contact');
contact.addEventListener('click' , () => {
    contactClick()
});