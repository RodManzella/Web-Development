/*

OBJETIVO:
Ao clicar no botão, alterar a cor de fundo da caixa para aquamarine,
apresentar o texto 'clique' no console e remover o evento click do botão
*/

let caixa = document.querySelector(".caixa")
let botao = document.querySelector("button")

function executar(event){
    caixa.classList.add(cor-fundo-caixa)
    console.log('clique')
    botao.removeEventListener('click', executar)
}

botao.addEventListener('click', executar)

// Uma vez que o event listener está associado a um botão, quando meu clicar
// ele não só vai executar a função, como vai passar um evento para ela
// e este evento vai ter qual o elemento HTML que está sendo clicado.