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