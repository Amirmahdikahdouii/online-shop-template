// Header Account navbar Dropdown menu section
let headerAccountButton = document.getElementById('header-account-button');
let headerAccountDropDownContainer = document.querySelector('.header-account-menu-container');
headerAccountButton.addEventListener('mouseenter', () => {
    headerAccountDropDownContainer.className = 'header-account-menu-container header-account-menu-container-active';
    [...headerAccountDropDownContainer.childNodes].forEach(element => {
        element.className = 'header-account-menu-item header-account-menu-item-active';
    })
});

headerAccountButton.addEventListener('mouseleave', () => {
    headerAccountDropDownContainer.className = 'header-account-menu-container';
    [...headerAccountDropDownContainer.childNodes].forEach(element => {
        element.className = 'header-account-menu-item';
    })
});


// Header menu item dropdown menus
let menuDropDownItems = [...document.getElementsByClassName('header-mega-menu-item')];
let menuDropDownMenuContainers = [...document.getElementsByClassName('header-mega-menu-items-container')];
menuDropDownItems.forEach((element, index) => {
    element.addEventListener('mouseenter', () => {
        menuDropDownMenuContainers[index].className = "header-mega-menu-items-container header-account-menu-container-active";
        [...menuDropDownMenuContainers[index].childNodes].forEach(menuItemLink => {
            menuItemLink.className = "header-mega-menu-items-container-sidebar-item header-account-menu-item-active"
        })
    })
    element.addEventListener('mouseleave', () => {
        menuDropDownMenuContainers[index].className = "header-mega-menu-items-container";
        [...menuDropDownMenuContainers[index].childNodes].forEach(menuItemLink => {
            menuItemLink.className = "header-mega-menu-items-container-sidebar-item"
        })
    })
})

// Carousel Script Section
let carouselProductCards = [...document.getElementsByClassName('carousel-product-card')];
let carouselNextButton = document.getElementById("change-carousel-items-button-next");
let carouselPreviousButton = document.getElementById("change-carousel-items-button-previous");
let firstActiveItemIndex = 0;
let lastActiveItemIndex = 2;
carouselNextButton.addEventListener('click', (e) => {
    if (lastActiveItemIndex === carouselProductCards.length-1) {
        e.preventDefault();
        return null;
    }
    lastActiveItemIndex++;
    carouselProductCards[lastActiveItemIndex].className = 'carousel-product-card carousel-product-card-active';
    carouselProductCards[firstActiveItemIndex].className = 'carousel-product-card';
    firstActiveItemIndex++;
})

carouselPreviousButton.addEventListener('click', (e) => {
    if (firstActiveItemIndex === 0) {
        e.preventDefault();
        return null;
    }
    carouselProductCards[lastActiveItemIndex].className = 'carousel-product-card';
    lastActiveItemIndex--;
    firstActiveItemIndex--;
    carouselProductCards[firstActiveItemIndex].className = 'carousel-product-card carousel-product-card-active';
})