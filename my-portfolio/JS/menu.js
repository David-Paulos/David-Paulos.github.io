const menu = document.querySelector('.menu');
const menuSection = document.getElementById('open-menu')
const homeButton = document.getElementById('home-button')
const projectsButton = document.getElementById('projects-button')
const aboutButton = document.getElementById('about-button')
const contactButton = document.getElementById('contact-button')

function toggleMenu () {
  menu.classList.toggle('open')
  menuSection.style.height= `${window.innerHeight}px`
  if(menu.className === 'menu open'){
      menuSection.style.display = 'flex'
  } else {
    menuSection.classList.toggle('sectionClose')
    setTimeout( ()=> {
        menuSection.classList.toggle('sectionClose')
        menuSection.style.display = 'none'}
    , 549) 
  }
}

menu.addEventListener('click', toggleMenu);

homeButton.addEventListener('click', () => {
  menu.classList.toggle('open')
  menuSection.classList.toggle('sectionClose')
  setTimeout( ()=> {
    menuSection.classList.toggle('sectionClose')
    menuSection.style.display = 'none'}
, 549)
})

projectsButton.addEventListener('click', () => {
  menu.classList.toggle('open')
  menuSection.classList.toggle('sectionClose')
  setTimeout( ()=> {
    menuSection.classList.toggle('sectionClose')
    menuSection.style.display = 'none'}
, 549)
})

aboutButton.addEventListener('click', () => {
  menu.classList.toggle('open')
  menuSection.classList.toggle('sectionClose')
  setTimeout( ()=> {
    menuSection.classList.toggle('sectionClose')
    menuSection.style.display = 'none'}
, 549)
})

contactButton.addEventListener('click', () => {
  menu.classList.toggle('open')
  menuSection.classList.toggle('sectionClose')
  setTimeout( ()=> {
    menuSection.classList.toggle('sectionClose')
    menuSection.style.display = 'none'}
, 549)
})