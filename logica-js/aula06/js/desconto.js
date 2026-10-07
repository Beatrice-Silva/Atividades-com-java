const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick = () => {

  const preco = Number(document.querySelector("#preco").value)
  const perc = Number(document.querySelector("#porcentagem").value)

  const desconto = preco * perc / 100
  const final = preco - desconto

  saida.textContent = `Desconto de R$ ${desconto.toFixed(2)}\nPreço final de R$ ${final.toFixed(2)}`
}                  