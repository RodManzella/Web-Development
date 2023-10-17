let valor = 0

//while
while(valor < 10){
    console.log(valor)
    valor++
}

// do while
do{
    console.log(valor)
    valor++
}while(valor < 10)

// for
 for(let valor = 0; valor < 10; valor++){
    console.log(valor);
}

// for in(mais funcional com objetos) pois trabalha com chaves

let valores = [1, 2, 3, 4, 5]
for (valor in valores){
    console.log(valor);
}


// for of(este sim irá apresentar os valores que nós queremos)
let nomes = ["Rodrigo", "Carlos", "Pomba"]

for(nome of nomes){
    console.log(nome)
}

// ciclo FOREACH
nomes.forEach((n) => console.log(n))
