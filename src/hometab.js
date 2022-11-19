import BackgroundImg from './background.jpg';
export {Homepage};

const Homepage = () => {

    const bi = new Image();
    bi.src = BackgroundImg;
    const bImage = bi.src.match(/[^/]*$/g)[0];
    
    const setBackground = () => {
        const content = document.body;
        content.style.backgroundImage = `url(./${bImage})`;
        content.style.backgroundSize = 'cover';
        content.style.backgroundPosition = 'center';
    }

    const header = () => {
        const content = document.getElementById('content');
        content.appendChild(document.createElement('header')).appendChild(document.createElement('h1'));
        document.getElementsByTagName('h1')[0].innerHTML = `Big Fred's BBQ`;
        
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

    const buildPage = () => {
        setBackground();
        header();  
    }

    return {bImage, buildPage}
}