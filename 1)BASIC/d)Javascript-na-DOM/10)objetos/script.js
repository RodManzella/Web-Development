// objetos

let pessoa = {

    // Propriedades
    nome: "Rodrigo",
    apelido: "digs",
    idade: 20,
    genero: "masculino",

    // apresentar métodos
    apresentar_nome: function(){
        return this.nome + this. apelido
    },

    apresentar_idade: function(){
        return this.idade + " anos de idade"
    },

    hobbies:[
        "programação",
        "Perfumes",
        "Academia"
    ]
}


// As variáveis dos objetos podem ter aspas


// Apresentar dados de um objeto-------------------

console.log(pessoa.nome)
console.log(pessoa['genero'])
console.log(pessoa.apresentar_nome())
console.log(apresentar_idade())
console.table(pessoa.hobbies)
//---------------------------------------------------

// Apresentar propriedades de um objeto
for (let propriedade in pessoa){
    console.log(pessoa[propriedade])
}
// -------------------------------------------------

//adicionar propriedades a um objeto
pessoa.email = "rodrigolindo@gmail.com"
pessoa.mobile = "123456789"
console.log(pessoa.email)
console.log(pessoa.mobile)
console.log(pessoa)
//------------------------------------------------------
// Eliminar propriedades de um objeto
delete pessoa.email
console.log(pessoa.email) // indefinido
//----------------------------------------------
// Como criar um objeto a partir de outro

let outra_pessoa = Object.assign({}, pessoa)
outra_pessoa.nome = "Rafael"

// outra forma: SPREAD OPERATOR

let outra_pessoa_ai  = {...pessoa} //... significa (vá buscar tudo do objeto pessoa)

