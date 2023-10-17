
//Function expression
 // só podemos chamar a função depois de declarada.
let escrever2 = function(){
    console.log("Texto da função")
}

escrever2();


// Arrow function -  introduzida com o EcmaScript 6. Possui sintaxe mais reduzida

let funcao1 = function(){
    console.log("Opa rapaziaaada")   // Function expression
}

let funcao2 = () =>{
    console.log("Fala galeera")  // arrow function
}

// Arrow function com parâmetros
let funcao = (a, b) =>{
    return a + b
}

console.log(funcao(10 + 20))

// Podemos simplificar a arrow function ainda mais
let adicao = (a, b) => a + b  // não precisamos de return

// e nem precisa de parênteses

let escrever = mensagem => console.log(mensagem)
escrever("Arrow function é brabo d+")