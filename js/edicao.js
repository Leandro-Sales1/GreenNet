function salvar(){
    var idade = document.querySelector("#idade").value;
    localStorage.setItem("valueText", idade)

    var pronome = document.querySelector("#pronome").value;
    localStorage.setItem("valueText1", pronome)

    var cidade = document.querySelector("#cidade").value;
    localStorage.setItem("valueText2", cidade)

    var funcao = document.querySelector("#funcao").value;
    localStorage.setItem("valueText3", funcao)

    var tempo = document.querySelector("#tempo").value;
    localStorage.setItem("valueText4", tempo)

    var interesses = document.querySelector("#interesses").value;
    localStorage.setItem("valueText5", interesses)

    var descricao = document.querySelector("#descricao").value;
    localStorage.setItem("valueText6", descricao)

    alert("Ainda não temos essa funcionalidade, aguarde por mais informações.")

}
function atualizar(){
    var idade_nova = document.querySelector("#idade_nova");
    idade_nova.textContent = localStorage.getItem("valueText");

    var pronome_novo = document.querySelector("#pronome_novo");
    pronome_novo.textContent = localStorage.getItem("valueText1");
    
    var cidade_nova = document.querySelector("#cidade_nova");
    cidade_nova.textContent = localStorage.getItem("valueText2");
    
    var funcao_nova = document.querySelector("#funcao_nova");
    funcao_nova.textContent = localStorage.getItem("valueText3");
    
    var tempo_novo = document.querySelector("#tempo_novo");
    tempo_novo.textContent = localStorage.getItem("valueText4");
    
    var interesses_novos = document.querySelector("#interesses_novos");
    interesses_novos.textContent = localStorage.getItem("valueText5");
    
    var descricao_nova = document.querySelector("#descricao_nova");
    descricao_nova.textContent = localStorage.getItem("valueText6");  
}

const thumbs_up = document.querySelectorAll(".like-notfilled")
console.log(thumbs_up)

thumbs_up.forEach((element) => {
    element.addEventListener('click', () => {
        if (element.classList.contains('like-notfilled')) {
            element.classList.remove('like-notfilled')
            element.classList.add('like-filled')

        } else {
            element.classList.remove('like-filled')
            element.classList.add('like-notfilled')
        }
    }
    )
})