const openMenuButton = document.getElementById('open-menu')
const closeMenuButton = document.getElementById('close-menu')
const navMenu = document.getElementById('navigation-menu')
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
