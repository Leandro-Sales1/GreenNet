import { validaLogin, newGuid } from "../Infrastructure/utils.js";
import { getPost, setPost, montaPost} from "../Infrastructure/post.js";
import { setImage } from "../Infrastructure/image.js";


function onEnterPage() {
    validaLogin();
    alterarFotoPerfil();
}

function alterarFotoPerfil() {
    let user = JSON.parse(localStorage.getItem("user"));
    Object.values(document.getElementsByClassName("imagem_perfil")).forEach(item => {
        item.src = user.profileImg;
    });
}

function submitPost() {

    let postId = newGuid();
    let listImg = Object.values(document.getElementsByClassName("ql-editor").item(0).getElementsByTagName("img"));

    let count = 1;
    listImg.forEach(oldImg => {
        setImage(postId, count, oldImg.src);
        let sub = `<sub id = '${count}'>-</sub>`;

        let parente = oldImg.parentNode;
        parente.innerHTML = parente.innerHTML.replace(oldImg.outerHTML, sub);
        count++;
    });

    let body = [];
    Object.values(document.getElementsByClassName("ql-editor").item(0).children).forEach(x => {
        body.push(x.outerHTML);
    });
    if (!body.join("").match("<p><br></p>")) {
        setPost({
            id: postId,
            body: body.join(""),
            hour: new Date().toLocaleString(),
            userId: JSON.parse(localStorage.getItem("user")).id
        });
        document.getElementsByClassName("ql-editor").item(0).innerHTML = "";
    }

}

async function loadFeed() {
    let count = 0;
    console.time('timer');
    (await montaPost()).forEach(post =>{
        let nodePost = document.createRange().createContextualFragment(criaPost(post, count));
        document.getElementById("divPosts").appendChild(nodePost);

        let subList = document.getElementById(`body-${count}`).getElementsByTagName('sub');
        for(let i = 0; i <= subList.length; i++){
            let img = document.createElement('img');
            img.setAttribute('src', post.img[i]);
            subList[i].parentNode.innerHTML = subList[i].parentNode.innerHTML.replace(subList[i].outerHTML, img.outerHTML)
        }
        count++;
    });  
    console.timeEnd('timer');
}

function criaPost(post, count) {
    return `<div class="card mx-3 mt-3" style="max-width: 700px;">
                    <div class="card-header" style="background-color:#E3FFE0">
                        <div class="d-flex flex-align-row align-items-center justify-content-start pb-2 mt-2">
                            <div>
                                <a id="profileLink" href="#">
                                    <img src="${post.profileImg}" alt="Foto de Perfil" title="Foto de perfil"
                                        class="foto_perfil_post">
                                </a>
                            </div>
                            <div class="px-3">
                                <a class="profileLinkName" href="#"
                                    style="color: black; text-decoration: none;">
                                    <div class="name">${post.name}</div>
                                </a>
                            </div>
                            <div id="hour" class="px-3" style="margin-left: auto;">
                                ${post.hour}
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div id="body-${count}" class="card-text">
                            ${post.body}
                        </div>
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
}


function itemsAnimation() {
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
}
function scrollToTopBtn() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

export { onEnterPage, scrollToTopBtn, itemsAnimation, submitPost, loadFeed }