const estrela1 = document.querySelector('#estrela1')
const estrela2 = document.querySelector('#estrela2')
const estrela3 = document.querySelector('#estrela3')
const estrela4 = document.querySelector('#estrela4')
const estrela5 = document.querySelector('#estrela5')
const estrela6 = document.querySelector('#estrela6')



estrela1.addEventListener('click', () => {
    if(estrela1.classList.contains('bi-star')){
    estrela1.classList.remove('bi-star')
    estrela1.classList.add('bi-star-fill')}
    else {
    estrela1.classList.remove('bi-star-fill')
    estrela1.classList.add('bi-star')}
    }
)

estrela2.addEventListener('click', () => {
    if(estrela2.classList.contains('bi-star')){
    estrela2.classList.remove('bi-star')
    estrela2.classList.add('bi-star-fill')}
    else {
    estrela2.classList.remove('bi-star-fill')
    estrela2.classList.add('bi-star')}
    }
)
estrela3.addEventListener('click', () => {
    if(estrela3.classList.contains('bi-star')){
    estrela3.classList.remove('bi-star')
    estrela3.classList.add('bi-star-fill')}
    else {
    estrela3.classList.remove('bi-star-fill')
    estrela3.classList.add('bi-star')}
    }
)
estrela4.addEventListener('click', () => {
    if(estrela4.classList.contains('bi-star')){
    estrela4.classList.remove('bi-star')
    estrela4.classList.add('bi-star-fill')}
    else {
    estrela4.classList.remove('bi-star-fill')
    estrela4.classList.add('bi-star')}
    }
)
estrela5.addEventListener('click', () => {
    if(estrela5.classList.contains('bi-star')){
    estrela5.classList.remove('bi-star')
    estrela5.classList.add('bi-star-fill')}
    else {
    estrela5.classList.remove('bi-star-fill')
    estrela5.classList.add('bi-star')}
    }
)
estrela6.addEventListener('click', () => {
    if(estrela6.classList.contains('bi-star')){
    estrela6.classList.remove('bi-star')
    estrela6.classList.add('bi-star-fill')}
    else {
    estrela6.classList.remove('bi-star-fill')
    estrela6.classList.add('bi-star')}
    }
)

function funcionalidade_nao_disponivel(){
    alert("Funcionalidade não disponível")
}
