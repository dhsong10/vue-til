<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/">
      TIL: Today I Learned
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbar"
      aria-controls="navbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbar">
      <span class="small text-secondary" v-if="isLogin">
        | {{ $store.state.user.nickname }}
      </span>
      <div class="navbar-nav ml-auto">
        <div v-if="!isLogin" class="nav-item p-1 mx-1 text-white">
          <span class="rounded px-2 py-1" @click="routeLogin">Login</span>
        </div>
        <div v-if="!isLogin" class="nav-item p-1 mx-1 text-white">
          <span class="rounded px-2 py-1" @click="routeSignup">Signup</span>
        </div>
        <div v-if="isLogin" class="nav-item p-1 mx-1 text-white">
          <span class="rounded px-2 py-1" @click="logout">Logout</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    routeLogin() {
      this.$router.push('/login');
    },
    routeSignup() {
      this.$router.push('/signup');
    },
    logout() {
      this.$store.commit('logout');
      this.$router.push('/');
    },
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
  },
};
</script>

<style scoped>
.nav-item > span:hover {
  cursor: pointer;
  background-color: grey;
}
</style>
