<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/">TIL: Today I Learned</a>
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
      <div class="navbar-nav ml-auto">
        <div class="nav-item p-1 mx-1 text-white">
          <span class="rounded px-2 py-1" @click="routeLogin">Login</span>
        </div>
        <div class="nav-item p-1 mx-1 text-white">
          <span class="rounded px-2 py-1" @click="routeSignup">Signup</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    routeLogin() {
      this.$router.push('/login');
    },
    routeSignup() {
      this.$router.push('/signup');
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
