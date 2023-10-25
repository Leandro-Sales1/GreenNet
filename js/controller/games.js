// --------------------- QUIZ --------------------- \\
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

// ----------------- JOGO DA FORCA ----------------- \\
const _listaPalavraChave = [
    "sustentabilidade",
    "ecologia",
    "reciclagem",
    "energia renovavel",
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
    "poluiçao do ar",
];
var _restante = 10;
var _palavraChave = "";
var _acertos = [];
var _erros = "Não contém: "

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
    _palavraChave = _listaPalavraChave[(Math.floor(Math.random() * _listaPalavraChave.length))].toLowerCase();
}

// Funções auxiliares Realiza Tentativa
function realizaTentativa() {
    if (_restante == 0) {
        return exibeMensagensForca("Nao foi dessa vez! Voce atingiu o limite de tentativas. Tente Novamente!");
    }
    validaTentativa();
}
function validaTentativa() {
    let value = document.getElementById("tentativa").value.toLowerCase();

    if (value.length > 1 && value == _palavraChave) {
        return exibeMensagensForca("Parabens! Voce adivinhou a palavra chave! Tente novamente e some mais pontos.");
    }
    else if (value.length > 1) {
        reduzRestanteTentativas();
        adicionaListErros(value);
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
        adicionaListErros(value);
    }
    document.getElementById("tentativa").value = '';

    if (_acertos.join("") == _palavraChave) {
        return exibeMensagensForca("Parabens! Voce adivinhou a palavra chave! Tente novamente e some mais pontos.");
    }
}
function reduzRestanteTentativas() {
    document.getElementById("restante").innerHTML = --_restante;

}
function adicionaListErros(tentativa) {
    _erros += `${tentativa}-`;
    document.getElementById("erros").innerHTML = _erros;
}
function exibeMensagensForca(message) {
    document.getElementById("text-modal-forca").innerHTML = message;
    document.getElementById("btnModalForca").click();
    reinicia();
}
function reinicia() {
    _restante = 10;
    _palavraChave = "";
    _acertos = [];
    _erros = "Não contém: ";
    document.getElementById("restante").innerHTML = "";
    document.getElementById("lacunas").innerHTML = "";
    document.getElementById("erros").innerHTML = ""

    let tentativa = document.getElementById('tentativa');
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


// --------------------- TERMO -------------------- \\
var _palavrasEco = [
    'ESTAR',
    'JOVEM',
    'AGUAS',
    'FLORA',
    'FAUNA',
    'AMORA',
    'LIXOS',
    'SELVA',
    'PAMPA',
    'MELAO',
    'SOLAR',
    'VERDE',
    'CICLO',
    'CAMPO',
    'POLEN',
    'CHUVA',
    'PRAIA',
    'FUNGI',
    'VITAL',
    'UMIDO',
    'VENTO',
    'SERRA',
    'REUSO',
    'ARIDA',
    'NOITE',
    'SERES',
    'LIRIO',
    'VIVER',
    'OASIS',
    'VIVEU',
    'PAZES',
    'FOLIA',
    'LIDER', 
    'JOIAS',
    'GRATO',
    'CHAMA',
    'HEROI',
    'PRAÇA',
    'DOCES',
    'FESTA',
    'GORDO',
    'CESTA',
    'CREME',
    'ZEBRA',
    'KIWIS',
    'LIMAO',
    'CANTO',
];
var _termo = [];
var _restanteTermo = 6;
var tentativa01 = document.getElementsByName('tentativa01');
var tentativa02 = document.getElementsByName('tentativa02');
var tentativa03 = document.getElementsByName('tentativa03');
var tentativa04 = document.getElementsByName('tentativa04');
var tentativa05 = document.getElementsByName('tentativa05');
var tentativa06 = document.getElementsByName('tentativa06');

document.getElementById("form").addEventListener('keydown', function (event) {
    if (event.key == "Enter") {
        validaTermo(retornaTentativaAtual(_restanteTermo));
    }
});
let list = document.getElementById("form").getElementsByTagName("input");
for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('keyup', function (event) {
        if(event.key == 'Backspace' && i != 0)
            list[(i - 1)].focus();
        else if (event.key != "Enter" && event.key != "Tab" && event.key != "Shift" && event.key != "Control" && i != 29)
            list[(i + 1)].focus();
    }); 
}


function initTermo() {
    document.getElementById('btnInicarTermo').disabled = true;
    selecionaTermo();
    desabilitarTentativas(_restanteTermo, false);
}
function validaTermo(tentativaAtual) {
    let palavra = tolist(tentativaAtual);

    if (palavra.length < 5){
        exibeMensagensTermo("Aviso!", "Apenas palavras com 5 letras!", '#fa6a64', false);
        return;
    }

    let acertos = [];
    for (let i = 0; i < 5; i++) {
        if (palavra[i] == _termo[i]) {
            tentativaAtual.item(i).style.backgroundColor = '#E3FFE0';
            acertos.push(i);
        }
    }

    for (let i = 0; i < 5; i++) {
        if (_termo.includes(palavra[i]) && !acertos.includes(i)) {
            tentativaAtual.item(i).style.backgroundColor = '#ffe9af';
        }
    }

    if(palavra.toString() == _termo.toString()){
        exibeMensagensTermo("Termo concluído.", "Parabéns! Você ganhou!", '#E3FFE0', true );
        reiniciaTermo();
        return;
    }

    desabilitarTentativas(_restanteTermo, true);
    _restanteTermo--;
    desabilitarTentativas(_restanteTermo, false);

    if (_restanteTermo == 0){
        exibeMensagensTermo("Que pena!", "Não foi dessa vez... tente novamente o quanto quiser!", '#ffe9af', true);
        reiniciaTermo();
        return;
    }
}


function tolist(nodeList) {
    let list = [];
    for (const item of nodeList) {
        if(item.value != "")
            list.push(item.value.toUpperCase());
    }
    return list;
}
function selecionaTermo() {
    _termo = _palavrasEco[(Math.floor(Math.random() * _palavrasEco.length))].split('');
}
function desabilitarTentativas(restantes, desabilitar, limpar) {
    switch (restantes) {
        case 6:
            for (const item of tentativa01) {
                item.disabled = desabilitar;

                if(!desabilitar && item == tentativa01.item(0))
                    item.focus();

                if(limpar){
                    item.value = "";
                    item.style.backgroundColor = '';
                }
            }
            break;
        case 5:
            for (const item of tentativa02) {
                item.disabled = desabilitar;

                if (!desabilitar && item == tentativa02.item(0))
                    item.focus();

                if (limpar) {
                    item.value = "";
                    item.style.backgroundColor = '';
                }
            }
            break;
        case 4:
            for (const item of tentativa03) {
                item.disabled = desabilitar;

                if (!desabilitar && item == tentativa03.item(0))
                    item.focus();
                
                if (limpar) {
                    item.value = "";
                    item.style.backgroundColor = '';
                }
            }
            break;
        case 3:
            for (const item of tentativa04) {
                item.disabled = desabilitar;

                if (!desabilitar && item == tentativa04.item(0))
                    item.focus();

                if (limpar) {
                    item.value = "";
                    item.style.backgroundColor = '';
                }
            }
            break;
        case 2:
            for (const item of tentativa05) {
                item.disabled = desabilitar;

                if (!desabilitar && item == tentativa05.item(0))
                    item.focus();

                if (limpar) {
                    item.value = "";
                    item.style.backgroundColor = '';
                }
            }
            break;
        case 1:
            for (const item of tentativa06) {
                item.disabled = desabilitar;

                if (!desabilitar && item == tentativa06.item(0))
                    item.focus();

                if (limpar) {
                    item.value = "";
                    item.style.backgroundColor = '';
                }
            }
            break;
        default:
            break;
    }
}
function retornaTentativaAtual(restantes) {
    switch (restantes) {
        case 6:
            return tentativa01;
        case 5:
            return tentativa02;
        case 4:
            return tentativa03;
        case 3:
            return tentativa04;
        case 2:
            return tentativa05;
        case 1:
            return tentativa06;
        default:
            break;
    }
}
function reiniciaTermo(){
    document.getElementById('btnInicarTermo').disabled = false;
    _restanteTermo = 6;
    _termo = [];
    for (let i = 1; i <= 6; i++) 
        desabilitarTentativas(i, true, true);
}
function exibeMensagensTermo(titulo, menssagem, color, status){
    document.getElementById("bodyTermo").innerHTML = menssagem;
    document.getElementById("titleTermo").innerHTML = titulo;
    document.getElementById("liveToast").style.backgroundColor = color;
    if (status)
        document.getElementById("resultTermo").innerHTML = "O termo era: " + _termo.join('');
    

    const toastLiveExample = document.getElementById('liveToast')
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastBootstrap.show();
}
