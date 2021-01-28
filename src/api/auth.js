import axios from 'axios';

const instance = createInstance();

function createInstance() {
  return axios.create({
    baseURL: 'http://localhost:3000/',
  });
}

function loginUser(param) {
  return instance.post('login', param);
}

export { loginUser };
