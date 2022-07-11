const openMenuIcon = document.getElementById('open-menu')
const closeMenuIcon = document.getElementById('close-menu')
const navMenu = document.querySelector('nav')
const homeButton = document.getElementById('home-button')
const locationButton = document.getElementById('location-button')
const goToTheTopButton = document.getElementById('goToTheTop')

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

function goUp() {
    window.scrollTo(0, 0)
}

openMenuIcon.addEventListener('click', openMenu)

closeMenuIcon.addEventListener('click', closeMenu)
homeButton.addEventListener('click', closeMenu)
locationButton.addEventListener('click', closeMenu)

goToTheTopButton.addEventListener('click', goUp)