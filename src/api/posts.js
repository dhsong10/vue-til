import { posts } from '@/api/index';

function fetchPosts() {
  return posts.get('/');
}

export { fetchPosts };
