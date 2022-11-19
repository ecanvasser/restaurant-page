import BackgroundImg from './background.jpg';

export default function homeClick() {
    const bi = new Image();
    bi.src = BackgroundImg;
    let bImage = bi.src.match(/[^/]*$/g)[0];

    document.getElementById('content').style.backgroundImage = `url(./${bImage})`;
    document.getElementById('content').style.backgroundSize = 'cover';
    document.getElementById('content').style.backgroundPosition = 'center';
}