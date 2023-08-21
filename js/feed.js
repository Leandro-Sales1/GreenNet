const estrela = document.querySelectorAll(".bi-star")
console.log(estrela)

estrela.forEach( (element) =>{
    element.addEventListener('click', () => {
    if(element.classList.contains('bi-star')){
        element.classList.remove('bi-star')
        element.classList.add('bi-star-fill')}
    else {
        element.classList.remove('bi-star-fill')
        element.classList.add('bi-star')}
    }
)})

function funcionalidade_nao_disponivel(){
    alert("Funcionalidade não disponível")
}

