import axios from 'axios';
import { setInterceptors } from '@/api/config/interceptors';

function createInstance() {
  const instance = axios.create({
    baseURL: 'http://localhost:3000/',
  });
  return instance;
}

function createInstanceWithTokenAuthorization() {
  const instance = axios.create({
    baseURL: 'http://localhost:3000/posts/',
  });
  setInterceptors(instance);
  return instance;
}

export const auth = createInstance();
export const posts = createInstanceWithTokenAuthorization();
