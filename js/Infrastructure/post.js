import { getDatabase, set, get, query, ref, equalTo, orderByChild} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import app from "./dbConfig.js";

const db = getDatabase(app);

async function getPost() {
    let postRef = ref(db, '/post');
    return Object.values((await get(query(postRef))).val()).sort((a, b) => (a.hour - b.hour)).reverse();
}


async function setPost(post) {
    let newPostRef = ref(db, `post/${post.id}`);
    await set(newPostRef, post);
}

async function getPostByUser(userId){
    let list = await get(query(ref(db, '/post'), orderByChild("userId"), equalTo(userId)));
    return Object.values(list.val()).sort((a, b) => (a.hour - b.hour)).reverse();
}


export { getPost, setPost, getPostByUser }