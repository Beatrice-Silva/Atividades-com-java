const TAXA_SERVICO = 0.1

const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick = () => {

    const valor = Number(document.querySelector("#valor").value)
    const pessoas = Number(document.querySelector("#pessoas").value)

    const servico = valor * TAXA_SERVICO
    const total = valor + servico
  const porPessoa = total / pessoas

  saida.textContent = `Serviço: R$ ${servico.toFixed(2)}\nTotal: R$ ${total.toFixed(2)}\nPor pessoa: R$ ${porPessoa.toFixed(2)}`
}