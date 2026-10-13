const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick = () => {


}

num = ""

if(num % 2 === 0){  

    saida.className = "ok"
    saida.textContent = "É par"

}else{

    saida.className = "alerta"
    saida.textContent = "É ímpar"

}



