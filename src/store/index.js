import Vue from 'vue';
import Vuex from 'vuex';

import { loginUser } from '@/api/auth';
import {
  saveTokenToCookie,
  saveUsernameToCookie,
  saveNicknameToCookie,
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
      saveTokenToCookie(data.token);
      saveUsernameToCookie(data.user.username);
      saveNicknameToCookie(data.user.nickname);
    },
  },
  modules: {},
});
