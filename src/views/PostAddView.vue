<template>
  <div class="container-fluid">
    <h1 class="display-4 text-center my-5">노트 추가하기</h1>
    <div class="card shadow rounded text-center m-auto" style="width: 80%">
      <div class="card-body">
        <PostAddForm />
      </div>
    </div>
  </div>
</template>

<script>
import PostAddForm from '@/components/PostAddForm.vue';

export default {
  components: {
    PostAddForm,
  },
};
</script>

<style></style>
