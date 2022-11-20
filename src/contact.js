import Map from './img/map.png'
export {Contactpage};

const Contactpage = () => {

    const maincopy = document.querySelector('.maincopy');
    const map = new Image();
    map.src = Map;

    const clearMain = () => {
        maincopy.innerHTML = '';
    }

    const title = () => {
        const title = maincopy.appendChild(document.createElement('h1'));
        title.innerHTML = 'CONTACT US';
        maincopy.insertAdjacentElement('beforeend', document.createElement('div'));
        
        maincopy.children[1].setAttribute('class', 'menuDivider');
    }
    
    const contactDiv = () => {
        maincopy.insertAdjacentElement('beforeend', document.createElement('div'))
        maincopy.children[2].setAttribute('class', 'contact-info');
    }

    const phone = () => {
        const contact = maincopy.children[2];
        contact.appendChild(document.createElement('div')).setAttribute('class', 'phone');
        document.querySelector('.phone').innerHTML = `Phone: 123-456-7890`;
    }

    const email = () => {
        const contact = maincopy.children[2];
        contact.insertAdjacentElement('beforeend', document.createElement('div'));
        document.querySelector('.contact-info').children[1].setAttribute('class', 'email');
        document.querySelector('.contact-info').children[1].innerHTML = `Email: contact@bigfredsbbq.com`;
    }

    const mapDisplay = () => {
        const contact = maincopy.children[2];
        contact.insertAdjacentElement('beforeend', map);
    }

    const buildContact = () => {
        clearMain();
        title();
        contactDiv();
        phone();
        email();
        mapDisplay();
    } 

    return {
        buildContact
    }
}