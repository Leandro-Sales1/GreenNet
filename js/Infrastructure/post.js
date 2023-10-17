import { getDatabase, set, get, query, ref } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import app from "./dbConfig.js";

const db = getDatabase(app);

async function getPost() {
    let postRef = ref(db, '/post');
    return Object.values((await get(query(postRef))).val());
}


async function setPost(post) {
    let newPostRef = ref(db, `post/${post.id}`);
    await set(newPostRef, post);
}


export { getPost, setPost }