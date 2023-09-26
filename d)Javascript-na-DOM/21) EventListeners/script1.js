let botao = document.querySelector('button')

// podemos adicionar múltiplos event listeners ao mesmo elemento

// os dois argumentos desse método são: 1)O tipo de evento que eu quero adicionar ao elemento e 2)que função será executada
botao.addEventListener('click', function(){
    document.querySelector('h1').textContent = "Texto Novo uiui"
})

botao.addEventListener('click', function(){
    console.log('clique')
})