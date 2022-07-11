const mainMenu = document.getElementById('main-menu')
const dessertMenu = document.getElementById('desserts-menu')
const mainMenuButton = document.getElementById('main-menu-choice')
const dessertMenuButton = document.getElementById('desserts-menu-choice')
const openMenuIcon = document.getElementById('open-menu')
const closeMenuIcon = document.getElementById('close-menu')
const navMenu = document.querySelector('nav')
const homeButton = document.getElementById('home-button')
const locationButton = document.getElementById('location-button')

function displayMainMenu() {
    dessertMenuButton.style.textDecoration = ''
    mainMenuButton.style.textDecoration = 'underline'
    dessertMenu.style.display = 'none'
    mainMenu.style.display = 'flex'
}

function displayDessertMenu() {
    mainMenuButton.style.textDecoration = ''
    dessertMenuButton.style.textDecoration = 'underline'
    mainMenu.style.display = 'none'
    dessertMenu.style.display = 'flex'
    
}

function openMenu() {
    navMenu.style.display = 'flex'
    navMenu.style.height = `${window.innerHeight}px`
}

function closeMenu() {
    navMenu.classList.toggle('close')
    closeMenuIcon.style.display = 'none'
    setTimeout(() => {
     navMenu.classList.toggle('close')
     navMenu.style.display = 'none'
     closeMenuIcon.style.display = 'block'
    }, 350)
}

mainMenuButton.addEventListener('click', displayMainMenu)
dessertMenuButton.addEventListener('click', displayDessertMenu )

openMenuIcon.addEventListener('click', openMenu)

closeMenuIcon.addEventListener('click', closeMenu)
homeButton.addEventListener('click', closeMenu)
locationButton.addEventListener('click', closeMenu)