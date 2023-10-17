// Funções

// exemplo 1

function escrever(){
    console.log('Aqui está a frase da função')
}
escrever();
// exemplo 2 - parâmetros

let mensagem = 'oi meu nome é Rodrigo';

function escrever(msg){
    console.log(msg)
}

escrever(mensagem);


// exemplo 3 - parâmetros e retorno

function adicionar(a, b){
    return a + b;
}

let resultado = adicionar(100, 200)
console.log("Resultado: "+resultado)


// exemplo 4 - Parâmetros com valor padrão (default values)
// se não passarmos nenhum parâmetro, o valor do parâmetro será passado como o informado

function saudacao(mensagem = "Bom dia"){
    console.log(mensagem)
}

saudacao()
saudacao("Boa ")