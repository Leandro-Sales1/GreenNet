import { validaLogin, newGuid } from "../Infrastructure/utils.js";
import { setPost, getPost, deletePost} from "../Infrastructure/post.js";
import { getImageURL, setImage } from "../Infrastructure/image.js";


function onEnterPage() {
    validaLogin();
    alterarFotoPerfil();
}

function alterarFotoPerfil() {
    let user = JSON.parse(localStorage.getItem("user"));
    Object.values(document.getElementsByClassName("imagem_perfil")).forEach(item => {
        item.src = user.profileImg;
    });
    Object.values(document.getElementsByName('profileLink')).forEach(item => {
        item.href = `../pages/perfil_usuario.html?key1=${user.id}`;
    });
}

async function createPost() {
    document.getElementById("spanEnviar").innerHTML = `
    <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>`;

    let postId = newGuid();
    let editor = document.getElementsByClassName("ql-editor").item(0);

    let listImg = Object.values(editor.getElementsByTagName("img"));

    let count = 1;
    for (const img of listImg) {
        await setImage(postId, count, img.src);
        img.src = await getImageURL(postId, count);
        img.style.maxWidth = '100%';
        count++;
    }

    if (editor.innerHTML != "<p><br></p>"){
        let user = JSON.parse(localStorage.getItem("user"));
        setPost({
            id: postId,
            body: editor.innerHTML,
            hour: new Date().getTime(),
            userId: user.id,
            name: user.nome,
            profileImg: user.profileImg,
            countImg: count
        });
        editor.innerHTML = "";
        loadFeed();
    }

    document.getElementById("spanEnviar").innerHTML = `
    <span class="material-symbols-outlined ">
        send
    </span>
    <span class="px-2 d-none d-md-block">
        Enviar
    </span>`;
}

async function loadFeed() {
    document.getElementById("divPosts").innerHTML = "";
    let count = 0;
    (await getPost()).forEach(post => {
        let nodePost = document.createRange().createContextualFragment(montaPost(post, count));
        document.getElementById("divPosts").appendChild(nodePost);

        count++;
    });
    itemsAnimation();
}

function montaPost(post, count) {
    return `<div class="card mx-3 mt-3" style="max-width: 700px;">
                    <div class="card-header" style="background-color:#E3FFE0">
                        <div class="d-flex flex-align-row align-items-center justify-content-start pb-2 mt-2">
                            <div>
                                <a id="profileLink" href="./perfil_usuario.html?key1=${post.userId}">
                                    <img src="${post.profileImg}" alt="Foto de Perfil" title="Foto de perfil"
                                        class="foto_perfil_post">
                                </a>
                            </div>
                            <div class="px-3">
                                <a class="profileLinkName" href="./perfil_usuario.html?key1=${post.userId}"
                                    style="color: black; text-decoration: none;">
                                    <div class="name">${post.name}</div>
                                </a>
                            </div>
                            <div id="hour" class="px-3" style="margin-left: auto;">
                                ${new Date(post.hour).toLocaleDateString()} às ${new Date(post.hour).getHours()}:${new Date(post.hour).getMinutes()}
                            </div>
                            <i class="bi bi-star"></i>
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

async function removeAllPosts(){
    await deletePost();
    loadFeed();
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

function clickBtnSair(){
    localStorage.removeItem('user');
    window.location.href = "../index.html";
}

export { onEnterPage, scrollToTopBtn, itemsAnimation, createPost, loadFeed, removeAllPosts, clickBtnSair }


const postPai = document.querySelector('#comentPai')
const formPost = document.querySelector('#form_coment')

formPost.addEventListener('submit', event => {
    event.preventDefault();
    const texto = event.target[0].value;
    document.getElementById("comment").value = "";
    const user = JSON.parse(localStorage.getItem("user"))
    let count = postPai.childElementCount + 1;
    const postFilho = `
    <div name="${count}" class="d-flex flex-align-row align-items-top justify-content-start pb-2 mt-2">
        <div>
            <a href="./perfil_usuario.html?key1=${user.id}">
                <img src="${user.profileImg}" alt="Foto da Bianca" title="Foto da Bianca"
                    class="foto_perfil_post">
            </a>
        </div>
        <div class="px-3">
            <div>
                <a href="./perfil_usuario.html?key1=${user.id}" style="color: black; text-decoration: none;">
                    <div>${user.nome}</div>
                </a>
            </div>
            <div>
                <small>
                    ${texto}
                </small>
            </div>
        </div>
    </div>`
    postPai.append(document.createRange().createContextualFragment(postFilho));
    let list = Object.values(postPai.children);
    list.sort((a, b) => parseInt(a.getAttribute("name") - parseInt(b.getAttribute("name")))).reverse();

    postPai.innerHTML = "";
    list.forEach(item =>{
        postPai.append(item)
    })
    console.log(list);
})