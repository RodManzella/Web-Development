/*
Objetivo:
Adicionar 3 eventos click, um para cada elemento dentro do body
cada um vai apresentar um texto único no console
e fazer com que sejam independentes dos outros.

(Propagation): forma como eventos viajam através da DOM

Se definirmos um evento para o elemento pai, ele também vai afetar os filhos. A menos
que interrompamos a conexãoe ntre esses elementos

*/ 

let section = document.querySelector("section")

let article = document.querySelector("article")

let div = document.querySelector("div")

section.addEventListener('click', (event) => {
    event.stopPropagation()
    console.log('section')
})

article.addEventListener('click', (event) => {
    event.stopPropagation()
    console.log('article')
})

div.addEventListener('click', (event) => {
    event.stopPropagation()
    console.log('div')
})