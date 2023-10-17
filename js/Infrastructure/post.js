import { getDatabase, set, get, query, ref } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import { getUser } from "./user.js"
import { getImage } from "./image.js"
import app from "./dbConfig.js";

const db = getDatabase(app);

async function getPost() {
    let postRef = ref(db, '/post');
    return Object.values((await get(query(postRef))).val());
}

async function montaPost() {
    let result = [];
    let postlist = await getPost();
    for (const post of postlist) {
         let [user, image] = await Promise.all([getUser(post.userId), getImage(post.id)]);
        result.push({
            name: user.nome,
            profileImg: user.profileImg,
            hour: post.hour,
            body: post.body,
            img: image
        });
    }
    return result;
}


function setPost(post) {
    let newPostRef = ref(db, `post/${post.id}`);
    set(newPostRef, post)
}


export { getPost, setPost, montaPost }