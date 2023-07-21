const estrela = document.querySelector('#estrela1')
const estrela2 = document.querySelector('#estrela2')

estrela.addEventListener('click', () => {
    if(estrela.classList.contains('bi-star')){
    estrela.classList.remove('bi-star')
    estrela.classList.add('bi-star-fill')}
    else {
    estrela.classList.remove('bi-star-fill')
    estrela.classList.add('bi-star')}
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
