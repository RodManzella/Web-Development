// A diferença entre event listener e event handdler, é que podemos adicionar vários event listeners
// ao mesmo evento num elemento.

// No event handler, não é possível adicionar dois eventos

// Não dá para adicionar mais do que um event handler

let botao = document.querySelector('#botao')
botao.onclick = funcao1  // esse evento é sobrescrito pelo segundo
botao.onclick = funcao2

function funcao1(){
    console.log('clique')
}

function funcao2(){
    document.querySelector('h1').textContent = "Novo texto"
}