const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick = () => {

  const c = Number(document.querySelector("#celsius").value)

  const f = c * 9 / 5 + 32

  saida.textContent = `${c} °C = ${f.toFixed(1)} °F`

}