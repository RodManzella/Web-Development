/*
document.querySelector()
document.querySelectorAll()

dois métodos mais utilizados atualmente para selecionar elementos html

usamos os seletores CSS no parâmetro


*/

let e = document.querySelector("#texto")  // podemos buscar um elemento utilizando qualquer seletor que ele possua

let f = document.querySelector(".cor-texto-noticia")  // selecionando mesmo elemento só que por uma classe


let a = document.querySelectorAll("p")  // array com todos elementos tipo p

// se tentarmos usar o querySelector() para procurar por elementos p, ele vai retornar o primeiro do html

// let e = document.querySelector("p")