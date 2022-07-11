const openMenuButton = document.getElementById('open-menu')
const closeMenuButton = document.getElementById('close-menu')
const homeLogoButton = document.getElementById('home-logo')
const navMenu = document.getElementById('navigation-menu')
const womanButton = document.getElementById('woman-section')
const manButton = document.getElementById('man-section')

function openMenu() {
    navMenu.style.display = 'flex'
    navMenu.style.height = `${window.innerHeight}px`
}

function closeMenu() {
    navMenu.classList.toggle('close')
    setTimeout(() => {
        navMenu.classList.toggle('close')
        navMenu.style.display = 'none'
    } ,340)
}


openMenuButton.addEventListener('click', openMenu)

closeMenuButton.addEventListener('click', closeMenu)

homeLogoButton.addEventListener('click', () => window.scrollTo(0, 0))

womanButton.addEventListener('click', () => window.location.href = './woman.html')

manButton.addEventListener('click', () => window.location.href = './man.html')


