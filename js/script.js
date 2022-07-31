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
    if (lastActiveItemIndex === carouselProductCards.length - 1) {
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

// Our Customers Image Slider

let customersImageContainers = [...document.getElementsByClassName('our-customers-slider-image-container')];
let customersImageActiveIndex = 1;
customersImageContainers.forEach((container, index) => {
    container.addEventListener('click', () => {
        if (index == customersImageActiveIndex) {
            return null;
        }
        container.className = "our-customers-slider-image-container our-customers-slider-image-container-active";
        customersImageContainers[customersImageActiveIndex].className = "our-customers-slider-image-container";
        let newActiveItemIndex;
        let deactiveItemIndex;
        if (index > customersImageActiveIndex) {
            deactiveItemIndex = index - 2;
            newActiveItemIndex = index + 1;
            if (newActiveItemIndex < customersImageContainers.length) {
                if (deactiveItemIndex >= 0) {
                    customersImageContainers[deactiveItemIndex].className = 'our-customers-slider-image-container our-customers-slider-image-container-deactive';
                }
                customersImageContainers[newActiveItemIndex].className = 'our-customers-slider-image-container'
            }
        } else {
            deactiveItemIndex = index + 2;
            newActiveItemIndex = index - 1;
            if (newActiveItemIndex >= 0) {
                if (deactiveItemIndex < customersImageContainers.length) {
                    customersImageContainers[deactiveItemIndex].className = 'our-customers-slider-image-container our-customers-slider-image-container-deactive'
                }
                customersImageContainers[newActiveItemIndex].className = 'our-customers-slider-image-container'
            }
        }
        customersImageActiveIndex = index;
    })
})

// New Items Container, Item Changes
let newItemsContainers = [...document.getElementsByClassName("new-item-info-container")];
let previousNewItemIndex = 0;
const changeNewItemContainers = () => {
    newItemsContainers[previousNewItemIndex].className = "center new-item-info-container";
    previousNewItemIndex++;
    if (previousNewItemIndex === newItemsContainers.length) {
        previousNewItemIndex = 0;
    }
    newItemsContainers[previousNewItemIndex].className = "center new-item-info-container new-item-info-container-active";
}
let automaticChangeNewItemsContainer = setInterval(() => { changeNewItemContainers() }, 3000);
newItemsContainers.forEach(element => {
    element.addEventListener("mouseenter", () => {
        clearInterval(automaticChangeNewItemsContainer);
    })
    element.addEventListener("mouseleave", () => {
        automaticChangeNewItemsContainer = setInterval(() => { changeNewItemContainers() }, 3000);
    })
})

// Timer Section Script
let countToDate = new Date().setHours(new Date().getHours() + 48);
setInterval(() => {
    let now = new Date();
    let timeBetweenDates = Math.floor(countToDate - now);
    let days = Math.floor(timeBetweenDates / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeBetweenDates % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeBetweenDates % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeBetweenDates % (1000 * 60)) / 1000);
    changeTimerCard(document.querySelector("[seconds-ones-card]"), seconds % 10);
    changeTimerCard(document.querySelector("[seconds-tens-card]"), Math.floor(seconds / 10));
    changeTimerCard(document.querySelector("[minutes-ones-card]"), minutes % 10);
    changeTimerCard(document.querySelector("[minutes-tens-card]"), Math.floor(minutes / 10));
    changeTimerCard(document.querySelector("[hours-ones-card]"), hours % 10);
    changeTimerCard(document.querySelector("[hours-tens-card]"), Math.floor(hours / 10));
    changeTimerCard(document.querySelector("[days-ones-card]"), days % 10);
    changeTimerCard(document.querySelector("[days-tens-card]"), Math.floor(days / 10));
}, 250);

const changeTimerCard = (card, newTime) => {
    let topCard = card.querySelector(".timer-card-top");
    let previousTime = parseInt(topCard.textContent);
    if (newTime === previousTime) return null;
    let bottomCard = card.querySelector(".timer-card-bottom");
    let topCardFlip = document.createElement("div");
    topCardFlip.classList.add("timer-card-top-flip");
    let bottomCardFlip = document.createElement("div");
    bottomCardFlip.classList.add("timer-card-bottom-flip");
    topCardFlip.textContent = newTime;
    bottomCardFlip.textContent = newTime;
    topCardFlip.addEventListener("animationstart", () => {
        topCard.textContent = newTime;
    })
    topCardFlip.addEventListener("animationend", () => {
        topCardFlip.remove()
    })
    bottomCardFlip.addEventListener("animationend", () => {
        bottomCard.textContent = newTime;
        bottomCardFlip.remove();
    })
    card.append(topCardFlip, bottomCardFlip);
}