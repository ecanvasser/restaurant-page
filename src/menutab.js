export {Menupage};

const Menupage = () => {

    const maincopy = document.querySelector('.maincopy');

    const clearMain = () => {
        maincopy.innerHTML = '';
    }

    const menuTitle = () => {
        const title = maincopy.appendChild(document.createElement('h1'));
        title.innerHTML = 'MENU';
        maincopy.insertAdjacentElement('beforeend', document.createElement('div'));
        
        maincopy.children[1].setAttribute('class', 'menuDivider');
    }

    const menuGrid = () => {
        maincopy.insertAdjacentElement('beforeend', document.createElement('div'));
        maincopy.children[2].setAttribute('class', 'menu-container');

        let dishes = ['Chicken', 'Tri-tip', 'Ribs', 'Steak'];
        const menuContainer = document.querySelector('.menu-container')
        for (let i = 0; i < dishes.length; i++) {
            menuContainer.appendChild(document.createElement('div')).setAttribute('class', `${dishes[i].toLowerCase()} menutile`);
        }
    }
    
    const ribs = () => {
        const ribTile = document.querySelector('.ribs');
        ribTile.appendChild(document.createElement('h3')).innerHTML = 'RIB PLATTER'
        ribTile.insertAdjacentElement('beforeend', document.createElement('div'));
        ribTile.children[1].setAttribute('class', 'tileDivider');
        ribTile.insertAdjacentElement('beforeend', document.createElement('p'));
        ribTile.children[2].setAttribute('class', 'tileText');
        ribTile.children[2].innerHTML = `Slow-smoked ribs with a choice of two sides`;
    }

    const steak = () => {
        const steakTile = document.querySelector('.steak');
        steakTile.appendChild(document.createElement('h3')).innerHTML = 'STEAK DINNER';
        steakTile.insertAdjacentElement('beforeend', document.createElement('div'));
        steakTile.children[1].setAttribute('class', 'tileDivider');
        steakTile.insertAdjacentElement('beforeend', document.createElement('p'));
        steakTile.children[2].setAttribute('class', 'tileText');
        steakTile.children[2].innerHTML = `Wood-fire grilled steak with mashed potatoes and green beans`;
    }

    const chicken = () => {
        const chikTile = document.querySelector('.chicken');
        chikTile.appendChild(document.createElement('h3')).innerHTML = 'CHICKEN DINNER';
        chikTile.insertAdjacentElement('beforeend', document.createElement('div'));
        chikTile.children[1].setAttribute('class', 'tileDivider');
        chikTile.insertAdjacentElement('beforeend', document.createElement('p'));
        chikTile.children[2].setAttribute('class', 'tileText');
        chikTile.children[2].innerHTML = `Zesty BBQ chicken over a bed of country potatoes and peppers`;
    }

    const tritip = () => {
        const triTile = document.querySelector('.tri-tip');
        triTile.appendChild(document.createElement('h3')).innerHTML = 'TRI-TIP SUPPER';
        triTile.insertAdjacentElement('beforeend', document.createElement('div'));
        triTile.children[1].setAttribute('class', 'tileDivider');
        triTile.insertAdjacentElement('beforeend', document.createElement('p'));
        triTile.children[2].setAttribute('class', 'tileText');
        triTile.children[2].innerHTML = `Savory and tender tri-tip with a choice of 3 delicious sides`;
    }

    const menuTiles = () => {
        ribs();
        steak();
        chicken();
        tritip();
    }

    const buildMenu = () => {
        clearMain();
        menuTitle();
        menuGrid();
        menuTiles();
    }

    return {
        buildMenu
    }
}