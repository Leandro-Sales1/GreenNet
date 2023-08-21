const gabarito = ["1-a","2-d", "3-b", "4-d", "5-c"];
function validaRespostas() {
    let elementList = document.getElementsByClassName("form-check-input");
    let countSuccess = 0;
    for (let item of elementList) {
        if (item.checked && gabarito.includes(item.id)){
            item.parentElement.classList.add("option_success");
            ++countSuccess;
        }
        else if (item.checked && !gabarito.includes(item.id)){
            item.parentElement.classList.add("option_error");
            document.getElementById(item.id[0] + "-menssagem").innerHTML = "Resposta correta seria: " + gabarito.find(x => x.startsWith(item.id[0]));
        }
        else{
            item.parentElement.classList.add("disable_hover");
        }
    }
    exibeMensagens(countSuccess);
}

function exibeMensagens(countSuccess){
    let text = document.getElementById("text-modal");
    if (countSuccess >= 3){
        text.innerHTML = `Parabéns! Você acertou ${countSuccess} de 5 questões! Utilize o QR Code para retirar sua recompensa.`;
        document.getElementById("qr").src = "../img/qrCode.png";
    }
    else
        text.innerHTML = `Não foi dessa vez! Você acertou ${countSuccess} de 5 questões! Tente novamente amanhã.`;
}