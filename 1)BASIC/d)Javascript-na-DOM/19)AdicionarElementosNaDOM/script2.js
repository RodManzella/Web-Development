// CRIAR E REMOVER ELEMENTOS HTML

let div1 = document.querySelector('#elemento_2')
let novo_paragrafo1 = document.createElement('p').textContent = "Texto do novo parágrafo 1"

//---------------------------------
// adicionar elemento antes
// div1.before(novo_paragrafo)

//--------------------------------
// adicionar no início do elemento
// div1.prepend(novo_paragrafo1)

//--------------------------------
//adicionar no fim do elemento
// div1.append(novo_paragrafo1)
//
//--------------------------------
// adicionar depois do elemento
// div1.after(novo_paragrafo1)

//-------------------------------
// outra forma de fazer a mesma coisa.

let div2 = document.querySelector("#elemento_3")
let novo_paragrafo2 = document.createElement('p').textContent = "Texto do novo parágrafo 2"

div2.insertAdjacentHTML('beforebegin', novo_paragrafo2)
div2.insertAdjacentHTML('afterbegin', novo_paragrafo2)
div2.insertAdjacentHTML('beforeend', novo_paragrafo2)
div2.insertAdjacentHTML('afterend', novo_paragrafo2)

// remover elementos do html

let e = document.querySelector("#elemento_1")
e.remove()

// IMPORTANTE:
// EXISTEM VÁRIOS OUTROS MÉTODOS PARA ADICIONAR E REMOVER ELEMENTOS NO DOM