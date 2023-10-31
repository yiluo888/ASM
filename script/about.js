const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const emailInput = document.querySelector("#personal-info .form-email .email-input");
const notificate = document.querySelector("#personal-info .form-email .notificate-email-input");
const btnSubmit = document.querySelector("#personal-info .form-email .btn-submit-email");
const infoContainer = document.querySelector("#personal-info .info-container");
const formEmail = document.querySelector("#personal-info .form-email");

const handleBtnSubmit = () => {
    const emailValue = emailInput.value;
    if (regex.test(emailValue)) {
        infoContainer.classList.remove("hidden");
        infoContainer.classList.add("display");
        formEmail.classList.add("hidden");
        formEmail.classList.remove("display");
    }
    else {
        notificate.innerHTML = "Email không hợp lệ";
        notificate.style.color = "red";
    }
};

btnSubmit.addEventListener("click", handleBtnSubmit)