const botao = document.querySelector("#calcular")
const nivel = ""
const saida = document.querySelector("#resultado")

botao.onclick = () => {
  
  const w = Number(document.querySelector("#nota1").value)
  const h = Number(document.querySelector("#nota2").value)
  
  const IMC = (h * h) / w

    if(IMC >= 30){
        
        nivel = "Obesidade"
        saida.className = "alerta"
    }else if(IMC >= 30 & IMC <= 25 ){

        nivel = "Sobrepeso"
        saida.className = "alerta"
    }else if(IMC >= 25 & IMC <= 18.5 ){

        nivel = "Peso normal"
        saida.className = "ok"

    }else if(IMC > 18.5 & IMC < 0){
        nivel = "Abaixo do peso"
        saida.className = "ok"
    }else{
        saida.className ="erro"
        saida.textContent = "Resultado inválido"
    }


saida.textContent = "Seu IMC é de: " + IMC.toFixed(1) + "; Nível:" + nivel

}




