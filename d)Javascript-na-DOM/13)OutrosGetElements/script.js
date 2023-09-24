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

console.log("oi")
