import { alterarSenha } from "../Infrastructure/user.js";

function newPassword(){
    let email = document.getElementById("Email");
    alterarSenha(email.value).then( novaSenha =>{
        email.value = "";
        document.getElementById("novaSenha").innerHTML = novaSenha;
        document.getElementById("openModal").click();
    });
    
}

export {newPassword}