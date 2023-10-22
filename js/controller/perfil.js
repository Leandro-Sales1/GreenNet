import { getPostByUser } from '../Infrastructure/post.js'
import {getUser, editUser} from '../Infrastructure/user.js'
import { validaLogin } from "../Infrastructure/utils.js";
validaLogin();
var urlParams = new URLSearchParams(window.location.search);
var user = await getUser(urlParams.get('key1'));

async function loadUser(){

    document.getElementById('background').style.backgroundImage = `url(${user.backgroundImage})`;
    document.getElementById('fotoPerfil').src = user.profileImg;
    document.getElementById('nome').innerHTML = user.nome;

    document.getElementById('idade').innerHTML = (new Date().getFullYear() - new Date(user.dataNascimento).getFullYear()) + ' anos';
    document.getElementById('tempoEmpresa').innerHTML = (new Date().getFullYear() - new Date(user.dataContratacao).getFullYear()) + ' anos';
    document.getElementById('cidade').value = user.cidade;
    document.getElementById('funcao').value = user.funcao;
    document.getElementById('descricao').value = user.descricao

    let count = 0;
    (await getPostByUser(user.id)).forEach(post => {
        let nodePost = document.createRange().createContextualFragment(criaPost(post, count));
        document.getElementById("divPosts").appendChild(nodePost);

        count++;
    });

}

function criaPost(post, count) {
    return `<div class="card mx-3 mt-3" style="max-width: 700px;">
                <div class="card-header" style="background-color:#E3FFE0">
                    <div
                        class="d-flex flex-align-row align-items-center justify-content-start pb-2 mt-2">
                        <div>
                            <a id="profileLink" href="./perfil_usuario.html?key1=${post.userId}">
                                <img src="${post.profileImg}" alt="Foto de Perfil" title="Foto de perfil" class="foto_perfil_post">
                            </a>
                        </div>
                        <div class="px-3">
                            <a class="profileLinkName" href="./perfil_usuario.html?key1=${post.userId}"
                                style="color: black; text-decoration: none;">
                                <div class="name">${post.name}</div>
                            </a>
                        </div>
                        <div class="px-3" style="margin-left: auto;">
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
                <div class="d-flex flex-align-row justify-content-around pb-3">
                    <div class="d-flex align-items-center justify-content-start">
                        <span class="material-symbols-outlined" alt="Compartilhar"
                            title="Compartilhar">
                            share
                        </span>
                        <span class="ps-2 d-none d-md-block">
                            Compartilhar
                        </span>
                    </div>
                    <div class="d-flex align-items-center justify-content-start">
                        <span class="material-symbols-outlined" alt="Comentar" title="Comentar">
                            mode_comment
                        </span>
                        <span class="ps-2 d-none d-md-block">
                            Comentar
                        </span>
                    </div>
                    <div class="like-notfilled">
                        <div class="d-flex align-items-center justify-content-start">
                            <span class="material-symbols-outlined" alt="Curtir" title="Curtir">
                                thumb_up
                            </span>
                            <span class="ps-2 d-none d-md-block">
                                Curtir
                            </span>
                        </div>
                    </div>
                </div>
            </div>`
}

async function edit(disabled){
    if(disabled){
        document.getElementById('cidade').removeAttribute('disabled');
        document.getElementById('funcao').removeAttribute('disabled');
        document.getElementById('descricao').removeAttribute('disabled');
        document.getElementById('btnEditar').innerHTML = 'Salvar ✒️'
    }
    else{
        let cidade = document.getElementById('cidade');
        let funcao = document.getElementById('funcao');
        let descricao = document.getElementById('descricao');

        await editUser({id: user.id, cidade: cidade.value, funcao: funcao.value, descricao: descricao.value});
        cidade.setAttribute('disabled', 'true');
        funcao.setAttribute('disabled', 'true');
        descricao.setAttribute('disabled', 'true');
        
        let btnEditar = document.getElementById('btnEditar');
        btnEditar.innerHTML = 'Editar ✒️';

        const toastLiveExample = document.getElementById('liveToast')
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastBootstrap.show()
    }
    
}
export { loadUser, edit};