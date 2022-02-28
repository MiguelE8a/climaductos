const menu = document.querySelector('.menu')
const x = document.querySelector('.x'),
openMenu = document.querySelector('.open-Menu');

openMenu.addEventListener('click', (e)=>{
    openMenu.style.display = 'none'
    menu.style.display='flex'
    x.style.display = 'block'
})



x.addEventListener('click', (e) =>{
    menu.style.display = 'none'
    x.style.display = 'none'
    openMenu.style.display = 'block'
    console.log('des')
})