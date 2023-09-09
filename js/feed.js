const estrela = document.querySelectorAll(".bi-star")
console.log(estrela)

estrela.forEach((element) => {
    element.addEventListener('click', () => {
        if (element.classList.contains('bi-star')) {
            element.classList.remove('bi-star')
            element.classList.add('bi-star-fill')
        }
        else {
            element.classList.remove('bi-star-fill')
            element.classList.add('bi-star')
        }
    }
    )
})
const thumbs_up = document.querySelectorAll(".like-notfilled")
console.log(thumbs_up)

thumbs_up.forEach((element) => {
    element.addEventListener('click', () => {
        if (element.classList.contains('like-notfilled')) {
            element.classList.remove('like-notfilled')
            element.classList.add('like-filled')

        }else{
            element.classList.remove('like-filled')
            element.classList.add('like-notfilled')
        }
    }
    )
})





function funcionalidade_nao_disponivel() {
    alert("Funcionalidade não disponível")
}

function scrollToTopBtn() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // This makes the scroll behavior smooth
    });
}
