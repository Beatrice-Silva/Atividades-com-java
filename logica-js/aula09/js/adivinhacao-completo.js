const botao2 = document.querySelector("#adivinhar")


const botao1 = document.querySelector("#sortear")
const saidaa = document.querySelector("#resultado")

const n1 = Number(document.querySelector("#ni").value)

let tent = 6
let ni = 0

botao1.onclick = () =>{

    const ns = Math.floor(Math.random() * 100) + 1 

}

botao2.onclick = () =>{

    if(tent !== 0){
        
        tent = tent - 1

        tents.text.document= "Possui :" + i +"tentativas"
        saida.className = "ok"

       while(ni !== ns){

    if( ni < ns){
    
        saida.textContent = "MAIOR"
        saida.className = "alerta"
    
    }else if( ni > ns){

        saida.textContent = "MENOR"
        saida.className = "alerta"

    }else if( ni === ns){

        saida.textContent = "Parabéns! Você acertou o numero sorteado!"
        saida.className = "ok"

    }else{
        saida.textContent = "Erro devido valores inválidos"
        saida.className = "erro"
    }
        }
    }else{
        saida.textContent = "Fim de jogo!" +
        "A resposta é:" + ns + "e voçê terminou com "+ tent +
        "tentativas."
    }
}


