const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")
num = ""

botao.onclick = () => {
    
if(num % 2 === 0){  

    saida.className = "ok"
    saida.textContent = "É par"

}else{

    saida.className = "alerta"
    saida.textContent = "É ímpar"

}

}