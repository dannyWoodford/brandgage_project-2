const welcomeForm = document.querySelector(".welcome-form__page")

document.addEventListener('click', (e) => {
    if(e.target.id === "submit"){
        e.preventDefault()
        welcomeForm.classList.add("hide");
    }
})