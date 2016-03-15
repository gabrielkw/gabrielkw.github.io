function simular() {
    var formulario = document.getElementById("formulario");
    var ia = formulario.elements["ia"].checked;
    var log = formulario.elements["log"].checked;
    var portas = formulario.elements["portas"].value;
    var jogos = formulario.elements["jogos"].value;
    var saida = "";
    var vitorias = 0;

    if (jogos > 1000 && log) {
        alert("Você não pode gerar relatórios de mais de 1000 jogos.");
        log = false;
    }


    for (var i = 1; i <= jogos; i++) {
        var porta_do_premio = Math.floor(Math.random() * portas);
        var porta_escolhida = Math.floor(Math.random() * portas);

        if (porta_escolhida != porta_do_premio) {
            porta_fechada = porta_do_premio;
        } else {
            do {
                var porta_fechada = Math.floor(Math.random() * portas);
            } while (porta_fechada == porta_do_premio || porta_fechada == porta_escolhida);
        }

        if (log) {
            saida += "<h4>Jogo " + i + "</h4>";
            saida += "O prêmio está escondido na porta " + porta_do_premio + "<br/>";
            saida += "O jogador escolhe a porta " + porta_escolhida + "<br/>";
            saida += "O apresentador mantém fechada a porta " + porta_fechada + "<br/>";
            if (ia) {
                saida += "O jogador troca de porta e ";
            } else {
                saida += "O jogador não troca de porta e ";
            }
        }

        if (ia) {
            porta_escolhida = porta_fechada;
        }
        if (porta_escolhida == porta_do_premio) {
            vitorias++;
            if (log) saida += "vence";
        } else if (log) {
            saida += "perde";
        }
    }

    document.getElementById("resultado").innerHTML = "O jogador ganhou " + vitorias + " vezes e perdeu " + (jogos - vitorias) + " vezes. Sua porcentagem de acerto foi de " + ((vitorias / jogos) * 100).toFixed(2) + "%.";

    if (log) {
        document.getElementById("log_title").style.display = "block";
        document.getElementById("log").style.display = "block";
        document.getElementById("log").innerHTML = saida;
    } else {
        document.getElementById("log_title").style.display = "none";
        document.getElementById("log").style.display = "none";
    }
}