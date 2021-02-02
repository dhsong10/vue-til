import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      username: '',
      nickname: '',
      token: '',
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user.username = payload.username;
      state.user.nickname = payload.nickname;
      state.user.token = payload.token;
    },
  },
  getters: {
    isLogin(state) {
      return state.user.token !== '';
    },
  },
  actions: {},
  modules: {},
});
