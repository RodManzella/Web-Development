// Aplicar estilos inline com JavaScript

let el = document.querySelector("h1")  // pega o primeiro h1 que aparecer no documento html e retorna para el
el.style.backgroundColor = "green"  // muda o background color do h1


let el1 = document.querySelector("p")  // pega o primeiro elemento p que aparece no html
console.log(el.style.backgroundColor) // printa na tela o estilo de background que está aplicado no p (rgb(10,10,10))




const estilos = window.getComputedStyle(el1)
console.log(estilos.getPropertyValues('color'))  // pegando informações do CSS de p