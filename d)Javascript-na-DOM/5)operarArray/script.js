let nomes = ["Rodrigo", "Juan", "Vinícius"];

// quantis elementos tem um array
console.log(nomes.length);

// adicionar mais elementos no final do array
nomes.push("joaquim");

// adicionar elementos no início do array
nomes.unshift("Macaba");

// remover elementos do início
nomes.shift();

// remover elemento do fim
nomes.pop();

// podemos guardar o valor removido em uma variável
let removido = nomes.pop();

// extrair parte de um array(retorna novo array)
let nomes_extraidos = nomes.slice(0,2);

//juntar dois arrays
let outros_nomes = ["Janavel", "Birulau", "Macintosh"];
nomes = nomes.concat(outros_nomes);

// procurar item num array
console.log(nomes.includes("carlos"));

// procurar posição de um item no array

console.log(nomes.indexOf("ana"));

// converter um array numa string
let todos_os_nomes = nomes.join("-");
// junta todos nomes presentes no array com "-";