import BackgroundImg from './background.jpg';
import GrillThumbnail from './maincopy.jpg';
export {Homepage};

const Homepage = () => {

    const bi = new Image();
    bi.src = BackgroundImg;
    const bImage = bi.src.match(/[^/]*$/g)[0];

    const tn = new Image();
    tn.src = GrillThumbnail;
    
    const setBackground = () => {
        const content = document.body;
        content.style.backgroundImage = `url(./${bImage})`;
        content.style.backgroundSize = 'cover';
        content.style.backgroundPosition = 'center';
        content.style.backgroundAttachment = 'fixed';
    }

    const header = () => {
        const content = document.getElementById('content');
        content.appendChild(document.createElement('header')).appendChild(document.createElement('h1'));
        document.getElementsByTagName('h1')[0].innerHTML = `BIG FRED'S BBQ`;
        
        const header = document.getElementsByTagName('header')[0];
        header.appendChild(document.createElement('nav'));

        const linkNames = ['Home', 'Menu', 'Contact'];
        const nav = document.getElementsByTagName('nav')[0];
        for (let i = 0; i < linkNames.length; i++) {
            let newLink = nav.appendChild(document.createElement('a'));
            newLink.innerHTML = linkNames[i];
            newLink.setAttribute('class', linkNames[i].toLowerCase());
            newLink.setAttribute('href', '');
        }
    }

    const mainContent = () => {
        const content = document.getElementById('content');
        const newDiv = document.createElement('div');
        content.insertAdjacentElement('beforeend', newDiv);

        const mainCopy = content.children[1];
        mainCopy.setAttribute('class', 'maincopy');
        mainCopy.appendChild(document.createElement('h1')).innerHTML = 'HOME OF THE BEST BBQ';
        mainCopy.insertAdjacentElement('beforeend', document.createElement('div'));

        const divider = mainCopy.children[1];
        divider.setAttribute('class', 'homeDivider')

        mainCopy.insertAdjacentElement('beforeend', document.createElement('p'))
        mainCopy.children[2].innerHTML = `Since 2020, Big Fred's BBQ became the go-to spot for mouth-watering BBQ. <br>
        Stop by and try our delicious farm-to-table recipes that are <br> finger-lickin' good!` 

        mainCopy.insertAdjacentElement('beforeend', tn)

        mainCopy.insertAdjacentElement('beforeend', document.createElement('p'));
        mainCopy.children[4].innerHTML = `Swing by to dine-in or call-in for take out`;
    }

    const buildPage = () => {
        setBackground();
        header(); 
        mainContent(); 
    }

    return {bImage, buildPage}
}