// ------- QUIZ
const gabarito = ["1-a", "2-d", "3-b", "4-d", "5-c"];
function validaRespostas() {
    let elementList = document.getElementsByClassName("form-check-input");
    let countSuccess = 0;
    for (let item of elementList) {
        if (item.checked && gabarito.includes(item.id)) {
            item.parentElement.classList.add("option_success");
            ++countSuccess;
        }
        else if (item.checked && !gabarito.includes(item.id)) {
            item.parentElement.classList.add("option_error");
            document.getElementById(item.id[0] + "-menssagem").innerHTML = "Resposta correta seria: " + gabarito.find(x => x.startsWith(item.id[0]));
        }
        else {
            item.parentElement.classList.add("disable_hover");
        }
    }
    exibeMensagens(countSuccess);
}

function exibeMensagens(countSuccess) {
    let text = document.getElementById("text-modal");
    if (countSuccess >= 3) {
        text.innerHTML = `Parabens! Voce acertou ${countSuccess} de 5 questões! Utilize o QR Code para retirar sua recompensa.`;
        document.getElementById("qr").src = "../img/qrCode.png";
    }
    else
        text.innerHTML = `Nao foi dessa vez! Voce acertou ${countSuccess} de 5 questões! Tente novamente amanha.`;
}

// ------- JOGO DA FORCA
const _listaPalavraChave = [
    "sustentabilidade",
    "ecologia",
    "reciclagem",
    "energia renovavel",
    "desenvolvimento sustentavel",
    "conservaçao",
    "meio ambiente",
    "carbono neutro",
    "bioenergia",
    "preservaçao",
    "eficiencia energetica",
    "agricultura organica",
    "biodiversidade",
    "reutilizaçao",
    "poluiçao zero",
    "aquecimento global",
    "floresta tropical",
    "agua limpa",
    "educaçao ambiental",
    "economia circular",
    "responsabilidade social",
    "mudanças climaticas",
    "proteçao ambiental",
    "sistema de transporte sustentavel",
    "consumo consciente",
    "gestao de resíduos",
    "compostagem",
    "floresta nativa",
    "sustentabilidade urbana",
    "biodegradavel",
    "conservaçao do solo",
    "reflorestamento",
    "ecossistema",
    "energia limpa",
    "habitos sustentaveis",
    "tecnologias verdes",
    "pegada de carbono",
    "tratamento de agua",
    "proteçao da vida selvagem",
    "poluiçao do ar",
];
var _restante = 10;
var _palavraChave = "";
var _acertos = [];

// ----> Tentativas
document.getElementById("tentativa").addEventListener('keydown', function (event) {
    if (event.key == "Enter") {
        realizaTentativa();
    }
});
// ----> Sortear
function clickBtnSortear() {
    iniciar();
}



// Funções auxiliares Btn Sortear
function iniciar() {
    document.getElementById("tentativa").disabled = false;
    document.getElementById("tentativa").placeholder = "digite suas tentativas..."
    _restante = 10;
    document.getElementById("restante").innerHTML = _restante;
    selecionaPalavraChave();
    criaLacunas();
}
function selecionaPalavraChave() {
    _palavraChave = _listaPalavraChave[(Math.floor(Math.random() * _listaPalavraChave.length))];
}


// Funções auxiliares Realiza Tentativa
function realizaTentativa() {
    if (_restante == 0) {
        return exibeMensagens("Nao foi dessa vez! Voce atingiu o limite de tentativas. Tente Novamente!");
    }
    validaTentativa();
}
function validaTentativa() {
    let value = document.getElementById("tentativa").value;

    if (value.length > 1 && value == _palavraChave) {
        return exibeMensagens("Parabens! Voce adivinhou a palavra chave! Tente novamente e some mais pontos.");
    }
    else if (value.length > 1) {
        reduzRestanteTentativas();
    }
    else if (_palavraChave.includes(value)) {
        for (let i = 0; i < _palavraChave.length; i++) {
            if (_palavraChave[i] == value)
                _acertos[i] = value;
        }
        criaLacunas(_palavraChave);
    }
    else {
        reduzRestanteTentativas();
    }
    document.getElementById("tentativa").value = '';

    if (_acertos.join("") == _palavraChave) {
        return exibeMensagens("Parabens! Voce adivinhou a palavra chave! Tente novamente e some mais pontos.");
    }
}
function reduzRestanteTentativas() {
    document.getElementById("restante").innerHTML = --_restante;
}
function exibeMensagens(message) {
    document.getElementById("text-modal-forca").innerHTML = message;
    document.getElementById("btnModalForca").click();
    reinicia();
}
function reinicia(){
    _restante = 10;
    _palavraChave = "";
    _acertos = [];
    document.getElementById("restante").innerHTML = "";
    document.getElementById("lacunas").innerHTML = "";
    let tentativa = document.getElementById("tentativa");
    tentativa.value = "";
    tentativa.disabled = true;
    tentativa.placeholder = "";
}


// Funções gerais
function criaLacunas() {
    let lacunas = "";
    for (let i = 0; i < _palavraChave.length; i++) {
        if (_palavraChave[i] == ' ' || _palavraChave[i] == '-')
            lacunas += ' - ';
        else if (_palavraChave[i] == _acertos[i] && _acertos[i] != '') {
            lacunas += `  ${_acertos[i]}  `;
        }
        else
            lacunas += "__ ";
    }
    document.getElementById("lacunas").innerHTML = lacunas;
}