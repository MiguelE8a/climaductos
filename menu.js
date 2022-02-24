const iconoMenu = document.querySelector('#icono-menu'),
    menu = document.querySelector('#menu')

iconoMenu.addEventListener('click', (e) =>{

    // alternamos estilos para el menu y body
    menu.classList.toggle('active')
    document.body.classList.toggle('opacity')

    const rutaActual = e.target.getAttribute('src')

    if(rutaActual == "./images/menu.png"){
        e.target.setAttribute('src', './images/menu2.png')
    }else{
        e.target.setAttribute('src', './images/menu.png')
    }
})