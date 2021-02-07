<template>
  <form @submit.prevent="submitForm" class="p-5">
    <div class="form-group">
      <div class="form-row align-items-center">
        <div class="col-md-3 text-left">
          <label for="title">Title</label>
        </div>
        <div class="col">
          <input
            class="form-control"
            id="title"
            type="text"
            v-model="formData.title"
          />
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="form-row align-items-center">
        <div class="col-md-3 text-left">
          <label for="contents">Contents</label>
        </div>
        <div class="col">
          <textarea
            class="w-100 form-control"
            name="contents"
            id="contents"
            rows="10"
            v-model="formData.contents"
          />
        </div>
      </div>
    </div>
    <div class="form-row text-right">
      <div class="col">
        <button class="btn btn-dark px-3" type="submit">
          추가하기
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { addPost } from '@/api/posts';

export default {
  data() {
    return {
      formData: {
        title: '',
        contents: '',
      },
    };
  },
  methods: {
    async submitForm() {
      const param = {
        title: this.formData.title,
        contents: this.formData.contents,
      };
      const response = await addPost(param);
      console.log(response);
      this.$router.push('/main');
    },
    initializeFormData() {
      this.formData.title = '';
      this.formData.contents = '';
    },
  },
};
</script>

<style></style>
