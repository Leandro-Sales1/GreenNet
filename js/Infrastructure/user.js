import { getDatabase, ref, get, set, query, update } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import app from "./dbConfig.js";
import {newPassword} from "./utils.js";

const db = getDatabase(app);

async function getAllUser(){
    let uRef = ref(db, "/user");
    return Object.values((await get(query(uRef))).val());
}

async function getUser(id){
    let uRef = ref(db, `/user/${id}`);
    return (await get(query(uRef))).val();

}

async function setUser(user){
    let uRef = ref(db, `/user/${user.id}`);
    await set(uRef,user);
}


async function alterarSenha(email){
    let novaSenha = newPassword();
    let user = (await getAllUser()).find(x => x.email == email)
    let userRef = ref(db, `user/${user.id}`);
    update(userRef,{
        senha: novaSenha
    })
    return novaSenha;
}

export {getAllUser, alterarSenha, setUser, getUser}