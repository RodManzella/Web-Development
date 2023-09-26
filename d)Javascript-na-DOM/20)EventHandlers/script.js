// Em JavaScript, um evento é uma ação que ocorre em um elemento HTML (como um clique do mouse, uma pressionada de tecla, uma submissão de formulário, etc.) 
// que pode ser detectada e manipulada pelo código JavaScript para executar uma função específica em resposta a essa ação.
//  Eventos são fundamentais para a interatividade em páginas da web.

// Event Handlers: Adicionar código JS ao HTMl que execute instruções quando ocorre determinada ação

// O evento é um atributo, que podemos definir no botão (nesse caso onclick)
// podemos definir código JS dentro do atributo.

/*
<button onclick="function clique(){
    console.log('clique1')
    };clique()">Alterar texto</button>
 
    dessa forma o html começa a ficar confuso, por isso, o ideal é criar uma função dentro do script
*/

function funcao(){
    console.log("oioioi oioioi")
}

function alterar_texto(){
    document.querySelector('h1').textContent = "Novo título"
}