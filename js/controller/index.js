import {getAllUser} from "../Infrastructure/user.js";

if (localStorage.getItem("user")) {
    window.location.href = "../pages/feed.html";
}

async function login() {
    let email = document.getElementById("Email");
    let senha = document.getElementById("Password");

    let userList = await getAllUser();

    let user = userList.find(x => x.email == email.value && x.senha == senha.value);
    if(!user){
        alert("Email/Senha inválidos.");
        email.value = "";
        senha.value = "";
        return;
    }

    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "./pages/feed.html";
}

export {login};