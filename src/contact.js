export {Contactpage};

const Contactpage = () => {

    const maincopy = document.querySelector('.maincopy');

    const clearMain = () => {
        maincopy.innerHTML = '';
    }

    const buildContact = () => {
        clearMain();
    } 

    return {
        buildContact
    }
}