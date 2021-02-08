import { posts } from '@/api/index';

function fetchPosts() {
  return posts.get('/');
}

function fetchPost(param) {
  const postId = param.id;
  return posts.get(`${postId}`);
}

function addPost(param) {
  return posts.post('/', param);
}

function updatePost(param) {
  const postId = param.id;
  return posts.put(`${postId}`, {
    title: param.title,
    contents: param.contents,
  });
}

export { fetchPosts, fetchPost, addPost, updatePost };
