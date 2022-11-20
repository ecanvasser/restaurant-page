import './style.css';
import { Homepage } from './hometab.js';
import { Menupage } from './menutab.js';
import { Contactpage } from './contact.js';

const initialLoad = Homepage();
initialLoad.buildPage();

const home = document.querySelector('.home');
home.addEventListener('click', (e) => {
    const homeBuilder = Homepage();
    homeBuilder.setBackground();
    e.preventDefault()
});

const menu = document.querySelector('.menu');
menu.addEventListener('click', (e) => {
    const menuBuilder = Menupage()
    menuBuilder.buildMenu();
    e.preventDefault();
});

const contact = document.querySelector('.contact');
contact.addEventListener('click' , (e) => {
    const contactBuilder = Contactpage();
    contactBuilder.buildContact();
    e.preventDefault();
});