// OPENING AND CLOSING MENU VARIABLES
const openMenuButton = document.getElementById('open-menu')
const closeMenuButton = document.getElementById('close-menu')
const navMenu = document.querySelector('nav')
// WAYS OF CONTACT AND CONNECTIONS
const phoneRedirect = document.getElementById('phone')
const emailRedirect = document.getElementById('email')
const locationRedirect = document.getElementById('find-us')
// FORM VARIABLES
const userFirstName = document.getElementById('userFirstName')
const userLastName = document.getElementById('userLastName')
const userEmail = document.getElementById('userEmail')
const formButton = document.getElementById('formButton')
const popupFormSubmission = document.getElementById('main__form-submission-confirmation')
const confirmationPara1 = document.getElementById('confirmationMessage1')
const confirmationPara2 = document.getElementById('confirmationMessage2')
const hideSumitionConfirmationButton = document.getElementById('hideButton')


// OPENINING AND CLOSING MENU FUNCTIONS
function openMenu() {
    navMenu.style.display = 'flex'
    navMenu.style.height = `${window.innerHeight}px`
}

function closeMenu() {
    navMenu.classList.toggle('close')
    setTimeout(() =>{
        navMenu.classList.toggle('close')
        navMenu.style.display = 'none'
    } ,440)
}

// WORD CAPITALIZATION FUNCTION
function wordCapitalization(word){
    const firstLetter = word.slice(0,1)
    const restOfName = word.slice(1)
    const uppedWord = firstLetter.toUpperCase() + restOfName.toLowerCase()
    return uppedWord
}

// OPENING CLOSING MENU EVENTS
openMenuButton.addEventListener('click', openMenu)
closeMenuButton.addEventListener('click', closeMenu)

// WAYS OF CONTACT AND CONNECTIONS EVENTS

phoneRedirect .addEventListener('click', () => window.location.href = "tel:123456789")

emailRedirect.addEventListener('click', () => window.location.href = "mailto:info@mwilliamsandco.com") 

locationRedirect.addEventListener('click', () => window.location.href = "https://goo.gl/maps/beHEZGpZDUDjsB1U6") 

// FORM EVENTS

formButton.addEventListener('click', () => {
    if(userFirstName.value === '' || userLastName.value === '' || userEmail.value === '' || userEmail.value.indexOf('@') === -1){
        popupFormSubmission.style.display = 'flex'
        confirmationPara1.textContent = 'You must insert your first name, last name and email address to submit the form.'
        confirmationPara2.textContent = ''
    } else {
        popupFormSubmission.style.display = 'flex'
        confirmationPara1.textContent = `Greetings ${wordCapitalization(userFirstName.value)} ${wordCapitalization(userLastName.value)}! Your form has been submitted.`
        confirmationPara2.textContent = `Soon we will reply to ${userEmail.value}.`
        
    }
})

hideSumitionConfirmationButton.addEventListener('click', () => popupFormSubmission.style.display = 'none')