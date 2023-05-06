const endpoint = "https://rest-api-276bd-default-rtdb.europe-west1.firebasedatabase.app/";
import { preparePostData } from "./helpers.js";
async function getPosts() {
  const response = await fetch(`${endpoint}/posts.json`);
  const data = await response.json();
  const posts = preparePostData(data);
  preparePostData(data);
  return posts;
}
async function deletePost(id) {
  const response = await fetch(`${endpoint}/posts/${id}.json`, {
    method: "DELETE",
  });
  return response;
}
async function submitUpdatedPost(id, title, body, image, food, living) {
  console.log(id);
  const postToUpdate = { id, title, body, image, food, living };
  const postAsJson = JSON.stringify(postToUpdate);
  const url = `${endpoint}/posts/${id}.json`;

  const response = await fetch(url, { method: "PUT", body: postAsJson });
  return response;
}
async function submitNewPost(image, title, body, food, living) {
  console.log("submitNewPost is running");
  const newPost = { image, title, body, food, living };
  const postAsJson = JSON.stringify(newPost);
  const response = await fetch(`${endpoint}/posts.json`, { method: "POST", body: postAsJson });
  return response;
}
export { getPosts, deletePost, submitUpdatedPost, submitNewPost };
