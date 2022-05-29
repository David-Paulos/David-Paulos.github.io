// OPENING AND CLOSING MENU VARIABLES
const openMenuButton = document.getElementById('open-menu')
const closeMenuButton = document.getElementById('close-menu')
const navMenu = document.querySelector('nav')
// CAROUSEL VARIABLES
const track = document.querySelector('.carousel__track')
const slides = Array.from(track.children)
const nextButton = document.querySelector('.carousel__button--right')
const prevButton = document.querySelector('.carousel__button--left')
const dotsNav = document.querySelector('.carousel__nav')
const dots = Array.from(dotsNav.children)
const slideWidth = slides[0].getBoundingClientRect().width
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

// CAROUSEL FUNCTIONS
function setSlidePosition(slide, index) {
    slide.style.left = `${slideWidth * index}px`
}
slides.forEach(setSlidePosition)

function moveToSlide(track, currentSlide, targetSlide) {
    track.style.transform = `translateX(-${targetSlide.style.left})`
    currentSlide.classList.remove('current-slide')
    targetSlide.classList.add('current-slide')
}
function updateDots(currentDot, targetDot) {
    currentDot.classList.remove('current-slide')
    targetDot.classList.add('current-slide')
}
function hideAndShowArrows(targetIndex, prevButton, nextButton, slides){
    if(targetIndex === 0) {
        prevButton.classList.add('is-hidden')
        nextButton.classList.remove('is-hidden')
    } else if(targetIndex === slides.length -1){
        prevButton.classList.remove('is-hidden')
        nextButton.classList.add('is-hidden')
    } else {
        prevButton.classList.remove('is-hidden')
        nextButton.classList.remove('is-hidden')
    }
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

// CAROUSEL EVENTS
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide')
    const prevSlide = currentSlide.previousElementSibling
    const currentDot = dotsNav.querySelector('.current-slide')
    const prevDot = currentDot.previousElementSibling
    const prevIndex = slides.findIndex(slide => slide === prevSlide)
    moveToSlide(track, currentSlide, prevSlide)
    updateDots(currentDot, prevDot)
    hideAndShowArrows(prevIndex, prevButton, nextButton, slides)
})

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide')
    const nextSlide = currentSlide.nextElementSibling
    const currentDot = dotsNav.querySelector('.current-slide')
    const nextDot = currentDot.nextElementSibling
    const nextIndex = slides.findIndex(slide => slide === nextSlide)
    moveToSlide(track, currentSlide, nextSlide)
    updateDots(currentDot, nextDot)
    hideAndShowArrows(nextIndex, prevButton, nextButton, slides)
})

dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button')

    if(!targetDot) return

    const currentSlide = track.querySelector('.current-slide')
    const currentDot = dotsNav.querySelector('.current-slide')
    const targetIndex = dots.findIndex(dot => dot === targetDot)
    const targetSlide =slides[targetIndex]

    moveToSlide(track, currentSlide, targetSlide)
    updateDots(currentDot, targetDot)
    hideAndShowArrows(targetIndex, prevButton, nextButton, slides)

})

// WAYS OF CONTACT AND CONNECTIONS EVENTS

phoneRedirect .addEventListener('click', () => window.location.href = "tel:123456789")

emailRedirect.addEventListener('click', () => window.location.href = "mailto:info@mysite.com") 

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