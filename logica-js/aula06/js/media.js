const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
  // 1. ler
  const n1 = Number(document.querySelector("#nota1").value)
  const n2 = Number(document.querySelector("#nota2").value)
  
  // 2. calcular
  const media = (n1 + n2) / 2
  
  // 3. mostrar
  saida.textContent = "Média: " + media.toFixed(1)
  saida.className = "resultado ok"
}

// Sem number() o n1 e n2 tornam strings "2" e "3"
// O resultado se torna "23" devido a junta de ambas apenas 
