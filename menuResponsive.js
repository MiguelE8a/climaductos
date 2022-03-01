const menu = document.querySelector('.menuResponsive')
const x = document.querySelector('#closedMenuRes'),
openMenu = document.querySelector('#openMenuRes'),
navMenuRes = document.querySelector('.nav-menuRes'),
containerMenuRes = document.querySelector(".containerMenuRes")

openMenu.addEventListener('click', (e)=>{
    openMenu.style.display = 'none'
    menu.style.display='flex'
    x.style.display = 'block'
    navMenuRes.style.justifyContent = 'flex-start'
    containerMenuRes.style.backgroundColor = 'rgb(0, 0, 0,0.5)'
})



x.addEventListener('click', (e) =>{
    menu.style.display = 'none'
    x.style.display = 'none'
    openMenu.style.display = 'block'
    containerMenuRes.style.backgroundColor = 'rgb(0,0,0,0.0)'
})