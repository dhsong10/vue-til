import Vue from 'vue';
import Vuex from 'vuex';

import { loginUser } from '@/api/auth';
import {
  setTokenToCookie,
  setUsernameToCookie,
  setNicknameToCookie,
  getTokenFromCookie,
  getUsernameFromCookie,
  getNicknameFromCookie,
} from '@/utils/cookies';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      username: getUsernameFromCookie() || '',
      nickname: getNicknameFromCookie() || '',
    },
    token: getTokenFromCookie() || '',
  },
  mutations: {
    setUser(state, user) {
      state.user.username = user.username;
      state.user.nickname = user.nickname;
    },
    setToken(state, token) {
      state.token = token;
    },
    logout(state) {
      state.user.username = '';
      state.user.nickname = '';
      state.token = '';
      setTokenToCookie('');
      setUsernameToCookie('');
      setNicknameToCookie('');
    },
  },
  getters: {
    isLogin(state) {
      return state.token !== '';
    },
  },
  actions: {
    async login({ commit }, payload) {
      const { data } = await loginUser(payload);
      commit('setUser', {
        username: data.user.username,
        nickname: data.user.nickname,
      });
      commit('setToken', data.token);
      setTokenToCookie(data.token, 5);
      setUsernameToCookie(data.user.username, 5);
      setNicknameToCookie(data.user.nickname, 5);
    },
  },
  modules: {},
});
