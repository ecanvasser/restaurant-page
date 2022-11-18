import './style.css';
import BackgroundImg from './background.jpg';
import homeClick from './hometab.js';
import menuClick from './menutab.js';
import contactClick from './contact.js';

const home = document.querySelector('.home');
home.addEventListener('click', () => {
    homeClick()
});

const menu = document.querySelector('.menu');
menu.addEventListener('click', () => {
    menuClick()
});

const contact = document.querySelector('.contact');
contact.addEventListener('click' , () => {
    contactClick()
});