/*
document.getElementsByClassName()
document.getElementsByName()
document.getElementsByTagName()

O método getElementByID retorna apenas 1 elemento, partindo do suposta que cada tag html tenha seu id único.

Esses outros métodos devolvem coleções

*/

let e = document.getElementsByClassName("texto-titulo") // retorna array contendo elementos que possuam essa classe
// no caso temos apenas 1 elemento com a classe "texto-titulo"

console.log(e[0])


// nesse caso temos 3 elementos html que possuem a classe "outra-noticia"
let a = document.getElementsByClassName("outra-noticia")  // a será um array com 3 elementos

// podemos selecionar um desses 3 elementos html do array(que no casso são hyperlinks)
// vamos então alterar o texto interno de um deles.

a[0].innerText = "Nova notícia"




let z = document.getElementsByName("text-usuario")  // esse método seleciona elementos que possuam a tag name(geralmente inputs)
console.log(z) // array de elementos com o nome "text-usuario"
// no nosso caso é somente um elemento do tipo input que podemos selecionar assim: z[0]

// a partir daí, podemos acessar os atributos desse elemento input:
z[0].value = "Bitonga"




let x = document.getElementsByTagName("p")  // retorna array com todos elementos p