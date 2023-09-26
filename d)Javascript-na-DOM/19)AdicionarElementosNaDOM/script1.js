// CRIAR E REMOVER ELEMENTOS HTML

//----------------------------------------------
// Podemos criar elementos com o método document.createElement()
// nota: esses elementos não são automaticamente adicionados ao DOM
//--------------------------------------------------------------------------

let novo_elemento = document.createElement('p') // criando elemento do tipo parágrafo
novo_elemento.innerText = "Texto do parágrafo"  //adicionando texto interno do elemento

// adicionar ao body(estrutura passa a fazer parte do HTML)
document.body.appendChild(novo_elemento)

//-------------------------------------------------------
// adicionar conteúdo de texto sem tag
var conteudo_de_texto = document.createTextNode("Este é um conteúdo de texto sem tag")
document.body.appendChild(novo_elemento)
//--------------------------------------------------------
// adicionar o parágrafo a um dos divs
let div = document.querySelector("#elemento_1")
div.appendChild(novo_elemento)
//-----------------------------------------------
// Criar um novo div e adicionar o novo parágrafo
let novo_div = document.createElement('div')
novo_div.classList.add('elemento')
novo_div.setAttribute('id', 'elemento_4')

let titulo = document.createElement('h1')
titulo.textContent = 'Título do elemento 4'
novo_div.appendChild(titulo)
document.body.appendChild(novo_div)
