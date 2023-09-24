//console.log(document.getElementById('noticia')) // vai mostrar a tag article no console

// console.log(document.getElementById('noticia').id)  // mostra o id, que no caso é noticia

let e = document.getElementById('titulo')  // e vai referenciar ao objeto do DOM que tenha o id "titulo" (Um p)

console.log(e)
console.log(e.id)  // atributo id do objeto. Vai mostrar o id "titulo"
console.log(e.classList)  // mostra todas as classes e seus respectivos valores associados ao elemento referenciado
console.log(e.className)

console.log(e.innerHTML)  // vai mostrar a string contida no elemento e o html se tiver.
console.log(e.innerText)  // vai mostrar somente a string contida no elemento. Ignora o html se tiver
console.log(e.textContent)  // mesma coisa do acima