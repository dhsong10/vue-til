<template>
  <form @submit.prevent="submitForm" class="p-5">
    <div class="form-group">
      <div class="form-row align-items-center">
        <div class="col-md-3 text-left">
          <label for="userId">ID</label>
        </div>
        <div class="col">
          <input
            class="form-control"
            id="userId"
            type="text"
            v-model="formData.userId"
          />
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="form-row align-items-center">
        <div class="col-md-3 text-left">
          <label for="password">Password</label>
        </div>
        <div class="col">
          <input
            class="form-control"
            id="password"
            type="password"
            v-model="formData.password"
          />
        </div>
      </div>
    </div>
    <div class="form-row text-right">
      <div class="col">
        <button class="btn btn-dark px-3" type="submit">로그인</button>
      </div>
    </div>

    <div v-if="logData.show" class="text-center text-red">
      {{ logData.message }}
    </div>
  </form>
</template>

<script>
import { loginUser } from '@/api/auth';
export default {
  data() {
    return {
      formData: {
        userId: '',
        password: '',
      },
      logData: {
        show: false,
        message: '',
      },
    };
  },
  methods: {
    async submitForm() {
      const param = {
        username: this.formData.userId,
        password: this.formData.password,
      };

      try {
        const { data } = await loginUser(param);
        this.$store.commit('setUser', {
          username: data.user.username,
          nickname: data.user.nickname,
          token: data.token,
        });
        this.$router.push('main');
      } catch (error) {
        console.log(error);
        this.logData.show = true;
        this.logData.message = error;
      } finally {
        this.initializeFormData();
      }
    },
    initializeFormData() {
      this.formData.userId = '';
      this.formData.password = '';
    },
  },
  created() {
    if (this.$store.getters.isLogin) {
      this.$router.push('main');
    }
  },
};
</script>

<style>
.text-red {
  color: rgb(210, 31, 60);
}
</style>
