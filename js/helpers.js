function preparePostData(dataObject) {
  const postArray = [];
  for (const key in dataObject) {
    const post = dataObject[key];
    post.id = key;
    postArray.push(post);
  }
  return postArray;
}
function compareTitle(post1, post2) {
  return post1.title.localeCompare(post2.title);
}

function compareBody(post1, post2) {
  return post1.body.localeCompare(post2.body);
}

function compareFood(post1, post2) {
  return post1.food.localeCompare(post2.food);
}

export { preparePostData, compareTitle, compareBody, compareFood };
