const estrela = document.querySelectorAll(".bi-star")

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




const postPai = document.querySelector('#divPost')
const postFilho = document.createElement('section')
const formPost = document.querySelector('#novo_post')
const primeiroPost = document.querySelector('#primeiroPost')
const listaPost = []

formPost.addEventListener('submit', event => {
    event.preventDefault()
    console.log(event)
    const titulo = event.target[0].value
    const texto = event.target[1].value
    const data = new Date
    const video = event.target[2].value
    const imagem = event.target[3].value
    postFilho.innerHTML = `
    <div class="card mx-3 mt-3" style="max-width: 700px;">
    <div class="card-header" style="background-color:#E3FFE0">
        <div class="d-flex flex-align-row align-items-center justify-content-start pb-2 mt-2">
            <div>
                <a href="../pages/profile_armando.html">
                    <img src="../img/perfil_armando.jpg" alt="Foto de perfil do Armando"
                        title="Foto de perfil do Armando" class="foto_perfil_post">
                </a>
            </div>
            <div class="px-3">
                <a href="../pages/profile_armando.html" style="color: black; text-decoration: none;">
                    <div>Armando Silva</div>
                </a>
            </div>
            <div class="px-3" style="margin-left: auto;">
                ${data.getDay()}/${data.getMonth()+1} às ${data.getHours()}:${data.getMinutes()}
            </div>
        </div>
    </div>

    <div class="card-body">
        <div class="row py-1">
            <div class="col-10 col-sm-11">
                <h5 class="card-title">${titulo}</h5>
            </div>
            <div class="col-2 col-sm-1">
                <i class="bi bi-star"></i>
            </div>
        </div>
        <img src=${imagem||video} alt="" title="" class="card-img"
        style="max-height: 200px; object-fit: cover;">

        <p class="card-text">
            ${texto}
        </p>
    </div>

            <!--Botões-->
            <div class="row py-2 " style="margin-top: -1rem;">
                <!--Share-->
                <div class="col d-flex justify-content-center botao-post">
                    <div class="d-flex align-items-center justify-content-start px-3 py-3">
                        <span class="material-symbols-outlined" alt="Compartilhar" title="Compartilhar">
                            share
                        </span>
                        <span class="ps-2 d-none d-md-block">
                            Compartilhar
                        </span>

                    </div>
                </div>
                <!--Comment-->
                <div class="col d-flex justify-content-center botao-post">
                    <div data-bs-toggle="modal" data-bs-target="#modal-1">
                        <div class="d-flex align-items-center justify-content-start px-3 py-3">
                            <span class="material-symbols-outlined" alt="Comentar" title="Comentar">
                                mode_comment
                            </span>
                            <span class="ps-2 d-none d-md-block">
                                Comentar
                            </span>
                        </div>
                    </div>
                </div>

                <!--Like-->
                <div class="col d-flex justify-content-center botao-post">
                    <div class="like-notfilled">
                        <div class="d-flex align-items-center justify-content-start px-3 py-3">
                            <span class="material-symbols-outlined" alt="Curtir" title="Curtir">
                                thumb_up
                            </span>
                            <span class="ps-2 d-none d-md-block">
                                Curtir
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    
    listaPost.unshift(postFilho)
    listaPost.forEach( item =>
        postPai.appendChild(item))
        
    postPai.insertBefore(postFilho,primeiroPost) 
})



function scrollToTopBtn() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // This makes the scroll behavior smooth
    });
}
