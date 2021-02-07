import { auth } from '@/api/index';

function loginUser(param) {
  return auth.post('login', param);
}

function signupUser(param) {
  return auth.post('signup', param);
}

export { loginUser, signupUser };
