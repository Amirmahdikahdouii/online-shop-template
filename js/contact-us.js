// Alert Box Section

// AlertBox Open Handler
const openAlertBox = (title, message, buttonMessage, buttonHandler = null) => {
    const closeAlertBox = () => {
        let alertContainer = document.querySelector(".alert-container");
        alertContainer.style.display = "none";
        alertSpinLoading.style.display = "block";
        alertBoxContainer.style.display = "none";
        alertTitle.innerText = "";
        alertText.innerHTML = "";
        alertbutton.innerText = "";
        alertbutton.removeEventListener("click", buttonHandler);
    }
    if (buttonHandler === null) {
        buttonHandler = closeAlertBox;
    }
    let alertBoxContainer = document.querySelector(".alert-box-container");
    let alertSpinLoading = document.querySelector(".alert-container-loading");
    let closeAlertIcon = document.getElementById("alert-box-close-icon");
    let alertTitle = document.querySelector(".alert-box-title");
    let alertText = document.querySelector(".alert-box-text");
    let alertbutton = document.querySelector(".alert-box-button");
    alertSpinLoading.style.display = "none";
    alertBoxContainer.style.display = "flex";
    alertTitle.innerText = title;
    alertText.innerHTML = message;
    alertbutton.innerText = buttonMessage;
    alertbutton.addEventListener("click", buttonHandler);
    closeAlertIcon.addEventListener("click", closeAlertBox)
}


// random Picture For Form Image Handler

// Our Images Name:
const formImages = [
    "contact-us-image-1.jpg",
    "contact-us-image-2.jpg",
    "contact-us-image-3.jpg",
    "contact-us-image-4.jpg"
];

// Random Index Generator
const randomIndexGenerator = () => {
    let imageCount = formImages.length;
    let randomIndex = Math.floor(Math.random() * imageCount);
    return randomIndex;
}

// Change Image Source
const changeRandomImageSource = (indexNumber) => {
    let imageName = formImages[indexNumber];
    let imageTag = document.querySelector(".main-container-image");
    imageTag.src = `../img/contact-us-images/${imageName}`;
}

window.onload = () => {
    // Call method after loading the page
    changeRandomImageSource(randomIndexGenerator());
}

// Send form Data with AJAX and in JSON Format

// return The Form Value
const getFormInputValue = (formInput) => {
    return formInput.value;
}

let submitFormButton = document.getElementById("contact-us-form-submit-button");
const submitFormDataHandler = () => {
    let alertContainer = document.querySelector(".alert-container");
    alertContainer.style.display = "flex";
    let formData = {
        "title": getFormInputValue(document.getElementById("contact-us-form-title-input")),
        "name": getFormInputValue(document.getElementById("contact-us-form-name-input")),
        "email": getFormInputValue(document.getElementById("contact-us-form-email-input")),
        "message": getFormInputValue(document.getElementById("contact-us-form-message-input"))
    }
    formData = JSON.stringify(formData);
    const requestOnloadHandler = () => {
        // replace this 'parseInt(xmlHttpRequest.status) === 200' with the condition of if!
        if (Math.floor(Math.random() * 10) > 5) {
            openAlertBox("Data Send!", `Data has been Succesfuly Send, we will check your message <i class='bi bi-heart-fill' style='color: red; font-size: 17px;'></i>`, "Ok");
        } else {
            openAlertBox("Data Send Failed!", `Sending Data Have been Failed, Please try Again <i class='bi bi-heart-fill' style='color: red; font-size: 17px;'></i>`, "Try Again", () => {
                let alertBoxContainer = document.querySelector(".alert-box-container");
                let alertSpinLoading = document.querySelector(".alert-container-loading");
                alertBoxContainer.style.display = "none";
                alertSpinLoading.style.display = "block";
                submitFormDataHandler();
            });
        }
    }
    setTimeout(() => { requestOnloadHandler() }, 2000);
    // Send Data With Ajax
    let xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onload = requestOnloadHandler;
    // Replace Your Url In second parameter instead of "your-Url"
    xmlHttpRequest.open("POST", "your-Url")
    xmlHttpRequest.send(formData);
};
submitFormButton.addEventListener('click', submitFormDataHandler);