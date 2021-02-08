<template>
  <div class="container-fluid">
    <h1 class="display-4 text-center my-5">노트 수정하기</h1>
    <div class="card shadow rounded text-center m-auto" style="width: 80%">
      <div class="card-body">
        <PostEditForm :postId="postId" />
      </div>
    </div>
  </div>
</template>

<script>
import PostEditForm from '@/components/PostEditForm.vue';

export default {
  components: {
    PostEditForm,
  },
  computed: {
    postId() {
      return this.$route.params.id;
    },
  },
};
</script>

<style></style>
