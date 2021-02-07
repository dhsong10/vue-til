import { posts } from '@/api/index';

function fetchPosts() {
  return posts.get('/');
}

function addPost(param) {
  return posts.post('/', param);
}

export { fetchPosts, addPost };
