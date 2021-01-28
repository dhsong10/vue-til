<template>
  <div class="container-fluid">
    <h1 class="display-4 text-center my-5">로그인 페이지</h1>
    <div class="card shadow rounded text-center m-auto" style="width: 80%">
      <div class="card-body">
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
export default {
  components: {
    LoginForm,
  },
};
</script>

<style></style>
