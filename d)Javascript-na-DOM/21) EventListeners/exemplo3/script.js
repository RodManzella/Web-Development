// FORMAS DE DEFINIR EVENT LISTENER


// function evento(){
//     document.querySelector('h1').textContent = "Novo texto"
// }

// let botao = document.querySelector("button")
// botao.addEventListener('click', evento())

//-----------------------------------------------------------------

// let botao = document.querySelector("button")
// botao.addEventListener('click', function(){
//     console.log('clique')
// })

//-------------------------------------------------------------
// Uso de arrow function

// let botao = document.querySelector('button')
// botao.addEventListener('click', () => console.log('clique'))

//----------------------------------------------------------------
// sem definir variável

// função com parâmetro "e": por estar associado a um event listener do tipo click vai assumir a identidade do "button"

document.querySelector("button").addEventListener('click', (e) =>{
    console.log('clique')
    e.target.textContent = "Alterado"  // altera texto do botão
    document.querySelector("h1").textContent = "Texto alterado"
})