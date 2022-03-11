const menu = document.querySelector('.menuResponsive')
const x = document.querySelector('#closedMenuRes'),
openMenu = document.querySelector('#openMenuRes'),
navMenuRes = document.querySelector('.nav-menuRes'),
containerMenuRes = document.querySelector(".containerMenuRes"),
contButtonSlider = document.querySelector('.cont-button__slider'),
videoCheo = document.querySelector('.video-cheo')

openMenu.addEventListener('click', (e)=>{
    openMenu.style.display = 'none'
    menu.style.display='flex'
    x.style.display = 'block'
    navMenuRes.style.justifyContent = 'flex-start'
    containerMenuRes.style.height = '100vh'
    containerMenuRes.style.backgroundColor = 'rgb(0, 0, 0,0.5)'
    contButtonSlider.style.display = 'none'
    videoCheo.removeAttribute('controls')
})



x.addEventListener('click', (e) =>{
    navMenuRes.style.height = '6rem'
    menu.style.display = 'none'
    x.style.display = 'none'
    openMenu.style.display = 'block'
    containerMenuRes.style.backgroundColor = 'rgb(0,0,0,0.0)'
    containerMenuRes.style.height = '6rem'
    contButtonSlider.style.display = 'block'
    videoCheo.setAttribute('controls', '')
})