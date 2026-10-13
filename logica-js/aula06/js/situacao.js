const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
 
  const n1 = Number(document.querySelector("#nota1").value)
  const n2 = Number(document.querySelector("#nota2").value)
  const n3 = Number(document.querySelector("#nota2").value)
  
  si = (n1 + n2 + n3) / 3
  
  if(si > 7 & si <= 10 ){
        
    nivel = "Aprovado"
    saida.className = "alerta"
    }else if(si > 10 & si <= 5){

    nivel = "Recuperação"
    saida.className = "ok"
    }else if(si > 5 & si < 0 ){

    nivel = "Falha! Erro detectado, valor inválido!"
    saida.className = "erro"
    }else{
    saida = "Falha! Erro detectado, valor inválido!"
    saida.className = "erro"
}

}

saida.textContent = "Situação de Aprovação do aluno:" + si