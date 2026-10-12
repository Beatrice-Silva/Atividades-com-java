//const botao = document.querySelector("#calcula") Erro na nomeclatura 
//comparada a pagina de que se original, o correto é calcular
const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick = () => {

    //const n1 = document.querySelector("#nota").value 
    //Falta de conversão de string para number, o correto é Number(document.querySelector("#nota").value)

    const n1 = Number(document.querySelector("#nota1").value)
    const n2 = Number(document.querySelector("#nota2").value)
    const n3 = Number(document.querySelector("#nota3").value)

    //const media = n1 + n2 + n3 / 3
    //A falta da separacao de prioridade por parenteses 
    // devido a soma faz com que a divisao seja priorizada e o resultado torne-se incorreto
    const media = (n1 + n2 + n3) / 3

  //saida.textContent = "Média: " + media -> formatação incorreta devido ao resultado se 
  // tornar um numero com muitas casas decimais, o correto é utilizar o toFixed(2) 
  // para limitar a 2 casas decimais  saida .textContent = `Média: ${media.toFixed(2)}`
}