/*
OBJETIVO:

Apresentar 25 caixas em stack vertical
Com gradação de cores vermelho, verde ou azul
com variação do valor RGB em 10 pontos


*/

document.querySelectorAll("button").forEach((button) => {
    button.addEventListener('click', (event) =>{
        for(let i = 0; i <= 250; i+= 10){
            let temp = document.createElement('div')
            temp.classList.add('caixa')
            let id = event.target.id

            if(id === 'btn_vermelho'){
                temp.style.backgroundColor = `rgb(${i}, 0, 0)`
            }else if(id === 'btn_verde'){
                temp.style.backgroundColor = `rgb(0, ${i}, 0)`
            }else{
                temp.style.backgroundColor = `rgb(0, 0, ${i})`
            }
            document.body.appendChild(temp)
        }
    })
})

function delete_elements(){
    document.querySelectorAll(".caixa").forEach(e => e.remove())
}