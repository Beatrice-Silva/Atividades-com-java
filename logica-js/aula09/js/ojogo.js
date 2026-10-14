const botao1 = document.querySelector("#sortear")
const botao2 = document.querySelector("#adivinhar")
const n1 = Number(document.querySelector("#ni").value)

let ni = 0;

botao1.onclick = () =>{

    const ns = Math.floor(Math.random() * 100) + 1 

}

botao2.onclick = () =>{

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
}