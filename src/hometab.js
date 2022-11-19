import BackgroundImg from './background.jpg';

export default function homePage() {
    const bi = new Image();
    bi.src = BackgroundImg;
    const bImage = bi.src.match(/[^/]*$/g)[0];

    const content = document.body;
    
    content.style.backgroundImage = `url(./${bImage})`;
    content.style.backgroundSize = 'cover';
    content.style.backgroundPosition = 'center';


}