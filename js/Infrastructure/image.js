import { getStorage, ref, uploadString, listAll, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js";
import app from "./dbConfig.js";

const storage = getStorage(app);


async function setImage(postId, posicao, url) {
    let fileRef = ref(storage, `posts/${postId}/${posicao}`);
    await uploadString(fileRef, url, 'data_url');
}


async function getImage(postId) {
    let list = [];
    let fileRef = ref(storage, `posts/${postId}/`);
    let fileList = Object.values((await listAll(fileRef)).items);

    for (const file of fileList) {
        list.push(await getDownloadURL(file));
    }

    return list;
}

async function getImageURL(postId, imgId) {
    let fileRef = ref(storage, `posts/${postId}/${imgId}`);
    return await getDownloadURL(fileRef);
}

export { setImage, getImage, getImageURL}