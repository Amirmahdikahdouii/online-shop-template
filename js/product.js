// Open Color Menu Button
let openColorMenuButton = document.getElementById("open-color-menu-button");
let closeColorMenuButton = document.getElementById("close-color-menu-button");
let colorMenuItems = document.querySelector(".colors-item-container");
let colorItemContainers = document.querySelectorAll(".colors-item");
openColorMenuButton.addEventListener("click", () => {
    colorMenuItems.style.width = "80%";
    colorItemContainers.forEach(element => {
        element.classList.add("colors-item-active");
    })
    openColorMenuButton.style.display = "none";
    closeColorMenuButton.style.display = "block";
})
closeColorMenuButton.addEventListener("click", () => {
    colorMenuItems.style.width = "30%";
    colorItemContainers.forEach((element, index) => {
        if (index < 3) {
            element.classList.add("colors-item-active");
        } else {
            element.classList.remove("colors-item-active");
        }
    })
    openColorMenuButton.style.display = "block";
    closeColorMenuButton.style.display = "none";
})

// Active Choosen Item
const activeChoosenItem = (items, class_name) => {
    items.forEach(element => {
        element.addEventListener("click", () => {
            items.forEach(allItems => {
                allItems.classList.remove(class_name)
            })
            element.classList.add(class_name);
        })
    })
}

// Choose Size Items
let sizeItemActive = [...document.getElementsByClassName("product-size-active")];
activeChoosenItem(sizeItemActive, "product-size-choose");

// Choose Active Color
activeChoosenItem(colorItemContainers, 'colors-item-choosen');

// Open Product Gallery Image
let openProductGalleryImage = [...document.getElementsByClassName("product-gallery-image-container")];
let openProductGalleryImageModalContainer = document.querySelector(".product-gallery-image-modal-section");
let productModalImage = document.getElementById("product-modal-image");
let productMainImage = document.querySelector(".product-main-image");
let closeProductGalleryImage = document.getElementById("close-product-gallery-modal-button");
openProductGalleryImage.forEach(element => {
    element.addEventListener("click", event => {
        openProductGalleryImageModalContainer.style.display = "flex";
        if (element.children[0].id === "open-product-gallery-image-button") {
            productModalImage.src = productMainImage.src;
            event.preventDefault();
            return null;
        }
        productModalImage.src = element.children[0].src;
    })
})

closeProductGalleryImage.addEventListener("click", () => {
    openProductGalleryImageModalContainer.style.display = "none";
})

// Related Items carousel
let carouselProductCards = [...document.getElementsByClassName('carousel-product-card')];
let carouselNextButton = document.getElementById("change-carousel-items-button-next");
let carouselPreviousButton = document.getElementById("change-carousel-items-button-previous");
let firstActiveItemIndex = 0;
let lastActiveItemIndex = 5;
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

// Submit Form With Ajax
let newCommentSubmitButton = document.getElementById("new-comment-submit-form-button");
newCommentSubmitButton.addEventListener("click", event => {
    // Loading Response Container
    let responseContainer = document.querySelector(".comment-message-response-container");
    let spinLoader = document.querySelector('.loading-circle-span');
    spinLoader.style.display = "block";
    responseContainer.style.display = "flex";
    // get Form Value and Input Nodes
    let userTitleInput = document.getElementById("new-comment-title-input");
    let userNameInput = document.getElementById("new-comment-name-input");
    let userEmailInput = document.getElementById("new-comment-email-input");
    let userCommentInput = document.getElementById("new-comment-message-input");
    let formInformationJSON = {
        "userTitleComment": userTitleInput.value,
        "userName": userNameInput.value,
        "userEmail": userEmailInput.value,
        "userComment": userCommentInput.value
    };
    formInformationJSON = JSON.stringify(formInformationJSON);
    let xhttpRequest = new XMLHttpRequest();
    const requestOnloadHandler = () => {
        let responseMessageContainer;
        let closeModalContainerIcon;
        // xhttpRequest.status === 200 replace to the condition for usage!
        let randomNumber = Math.floor(Math.random() * 10);
        if (randomNumber >= 5) {
            spinLoader.style.display = "none";
            responseMessageContainer = document.querySelector(".succesful-comment-added-container");
            responseMessageContainer.style.display = "flex";
            closeModalContainerIcon = document.querySelector(".succesful-comment-added-container>i.bi-x");
        }
        else {
            spinLoader.style.display = "none";
            responseMessageContainer = document.querySelector(".unsuccesful-comment-added-container");
            responseMessageContainer.style.display = "flex";
            closeModalContainerIcon = document.querySelector(".unsuccesful-comment-added-container>i.bi-x");
            let trySendAgainButton = document.getElementById("try-Again-send-comment-button");
            trySendAgainButton.addEventListener("click", () => {
                responseMessageContainer.style.display = "none";
                spinLoader.style.display = 'block';
                // Replace this timeOut with  requestOnloadHandler();
                setTimeout(() => { requestOnloadHandler() }, 2000);
            })
        }
        let closeModalContainerButton = document.querySelector(".close-comment-modal-message-button");
        const closeModalContainer = () => {
            responseMessageContainer.style.display = "none";
            responseContainer.style.display = "none";
        }
        closeModalContainerIcon.addEventListener("click", closeModalContainer);
        closeModalContainerButton.addEventListener("click", closeModalContainer);
    }
    setTimeout(() => { requestOnloadHandler() }, 2000);
    xhttpRequest.onload = requestOnloadHandler;
    // Put Your URL for sending form information into second parameter of open() method
    xhttpRequest.open("post", "Your-URL");
    xhttpRequest.send(formInformationJSON);
})

// Like Or Dislike Comment
let likeCommentButtons = document.querySelectorAll(".like-comment-icon-container>.bi-hand-thumbs-up");
let likeCommentButtonsFill = document.querySelectorAll(".like-comment-icon-container>.bi-hand-thumbs-up-fill");
let disLikeCommentButtons = document.querySelectorAll(".like-comment-icon-container>.bi-hand-thumbs-down");
let disLikeCommentButtonsFill = document.querySelectorAll(".like-comment-icon-container>.bi-hand-thumbs-down-fill");
const likeDisLikeButtonHandler = (element, button) => {
    element.style.display = "none";
    button.style.display = "block";
}
likeCommentButtons.forEach((element, index) => {
    element.addEventListener("click", () => {
        likeDisLikeButtonHandler(element, likeCommentButtonsFill[index]);
        disLikeCommentButtons[index].style.display = "block";
        disLikeCommentButtonsFill[index].style.display = "none";
    })
})
likeCommentButtonsFill.forEach((element, index) => {
    element.addEventListener("click", () => { likeDisLikeButtonHandler(element, likeCommentButtons[index]) })
})
disLikeCommentButtons.forEach((element, index) => {
    element.addEventListener("click", () => {
        likeDisLikeButtonHandler(element, disLikeCommentButtonsFill[index]);
        likeCommentButtons[index].style.display = "block";
        likeCommentButtonsFill[index].style.display = "none";
    })
})

disLikeCommentButtonsFill.forEach((element, index) => {
    element.addEventListener("click", () => { likeDisLikeButtonHandler(element, disLikeCommentButtons[index]) })
})