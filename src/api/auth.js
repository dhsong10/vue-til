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

function signupUser(param) {
  return instance.post('signup', param);
}

export { loginUser, signupUser };
