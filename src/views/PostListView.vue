<template>
  <div class="container-fluid">
    <h1 class="display-4 text-center my-5">Today I Learned</h1>

    <div class="row justify-content-md-center">
      <div v-for="post in posts" :key="post._id" class="col col-md-4 my-2">
        <PostCard :item="post" />
      </div>
    </div>

    <div class="fixed-bottom text-right m-5">
      <i
        class="fa fa-3x fa-plus-circle text-primary cursor-pointer"
        @click="$router.push('/post/add')"
      />
    </div>
  </div>
</template>

<script>
import PostCard from '@/components/PostCard.vue';
import { fetchPosts } from '@/api/posts';

export default {
  components: {
    PostCard,
  },
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    const { data } = await fetchPosts();
    this.posts = [...data.posts];
  },
};
</script>

<style>
.cursor-pointer {
  cursor: pointer;
}
</style>
