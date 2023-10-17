
// document é um objeto Javascript que representa a estrutura html de uma página
// Podemos ver essa estrutura como uma árvore
let elemento = document.documentElement // elemento se referencia a todo html da página
console.log(elemento)
console.log(typeof(elemento))
console.log(elemento.lang)  // atributo de linguagem


elemento = document.head  // dessa forma, a var elemento vai referenciar à tag head do html
// usando um atributo do objeto document

console.log(elemento)