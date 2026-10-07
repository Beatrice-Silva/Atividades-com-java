
const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
  const dist = Number(document.querySelector("#distancia").value)
  const consumo = Number(document.querySelector("#consumo").value)
  const preco = Number(document.querySelector("#precoLitro").value)

  const litros = dist / consumo
  const ida = litros * preco
  const idaVolta = ida * 2

  saida.textContent = `${litros.toFixed(1)} litros\nIda: R$ ${ida.toFixed(2)}\nIda e volta: R$ ${idaVolta.toFixed(2)}`
}

// Pergunta: o que aparece quando consumo é 0?
// dá infinito) nos litros e no custo, porque divisão por zero em JS não dá erro