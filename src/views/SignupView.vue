<template>
  <div class="container-fluid">
    <h1 class="display-4 text-center my-5">회원 가입 페이지</h1>
    <div class="card shadow rounded text-center m-auto" style="width: 80%">
      <div class="card-body">
        <SignupForm />
      </div>
    </div>
  </div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue';
export default {
  components: {
    SignupForm,
  },
};
</script>

<style></style>
