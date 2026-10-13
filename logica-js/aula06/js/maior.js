const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick = () => {

  const n1 = Number(document.querySelector("#nota1").value)
  const n2 = Number(document.querySelector("#nota2").value)

  if(n1 > n2){
    saida.textContent = "O primeiro valor é o maior número:" + maior.toFixed(1)
    saida.className = "ok"
}else if (n2 > n1){
    saida.textContent = "O segundo valor é o maior número:" + maior.toFixed(1)
    saida.className = "ok"
}else if (n2 == n1){
    saida.textContent = "Os dois valores são iguais" + maior.toFixed(1)
    saida.className = "erro"
}else{
    saida.textContent = "Falha! São valores inválidos!" 
    saida.className = "erro"
}

}




