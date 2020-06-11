const welcomeForm = document.querySelector(".welcome-form__page")
const form = document.querySelector('#form')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log("first name", e.target.firstName.value)
    console.log("last name",e.target.lastName.value)
    console.log("email",e.target.email.value)

    console.log("company",e.target.company.value)
    console.log("title",e.target.title.value)
    console.log("phoneNumber",e.target.phoneNumber.value)
    
    console.log("address",e.target.address.value)
    console.log("state",e.target.state.value)
    
    welcomeForm.classList.add("hide");
})