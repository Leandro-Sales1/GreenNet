const estrela = document.querySelectorAll('.bi-star')

estrela.forEach( (elm) =>{
    elm.addEventListener('click', () => {
    if(elm.classList.contains('bi-star')){
    elm.classList.remove('bi-star')
    elm.classList.add('bi-star-fill')}
    else {
    elm.classList.remove('bi-star-fill')
    elm.classList.add('bi-star')}
    }
)})


