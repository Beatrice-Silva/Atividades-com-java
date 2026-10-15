let secreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let fim = false;
let historicoTexto = "";

        const input = document.querySelector("#chute");
        const btn = document.querySelector("#btn-adivinhar");
        const saida = document.querySelector("#resultado");
        const saidaHist = document.querySelector("#historico");
        const saidaRestam = document.querySelector("#restam");

        btn.onclick = () => {
            if (fim) {
                saida.textContent = "O jogo acabou. Aperte F5 para jogar de novo.";
                saida.className = "erro";
                return;
            }

            const chute = Number(input.value);

            if (!chute || chute < 1 || chute > 100) {
                saida.textContent = "Campo vazio ou fora de 1 a 100! Não conta como tentativa.";
                saida.className = "erro";
                return;
            }

            tentativas++;
            historicoTexto += chute + " ";
            saidaHist.textContent = "Chutes: " + historicoTexto;

            if (chute === secreto) {
                saida.textContent = `Acertou em ${tentativas} tentativas!`;
                saida.className = "ok";
                fim = true;
            } else if (tentativas >= 7) {
                saida.textContent = `Suas 7 tentativas acabaram. O número era ${secreto}.`;
                saida.className = "erro";
                fim = true;
            } else {
                saida.textContent = chute < secreto ? "é MAIOR" : "é MENOR";
                saida.className = "alerta";
                saidaRestam.textContent = `Restam ${7 - tentativas} tentativas.`;
            }
            input.value = "";
            input.focus();
        };