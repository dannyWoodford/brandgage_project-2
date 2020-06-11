const welcomeForm = document.querySelector(".welcome-form__page")

document.addEventListener('click', (e) => {
    console.dir(e.target)
    if(e.target.id === "submit"){
        e.preventDefault()
        // setTimeout(() => {
            welcomeForm.classList.add("hide");
        // }, 600)
    }
})