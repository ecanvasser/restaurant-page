import './style.css';
import { Homepage } from './hometab.js';
import menuClick from './menutab.js';
import contactClick from './contact.js';

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
    menuClick()
    e.preventDefault();
});

const contact = document.querySelector('.contact');
contact.addEventListener('click' , () => {
    contactClick()
});