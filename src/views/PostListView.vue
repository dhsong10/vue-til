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
export default {
  components: {
    PostCard,
  },
  data() {
    return {
      posts: [
        {
          _id: '1',
          title: '학습 노트 1',
          contents: '학습 내용 1',
          createdAt: new Date(),
        },
        {
          _id: '2',
          title: '학습 노트 2',
          contents: '학습 내용 2',
          createdAt: new Date(),
        },
        {
          _id: '3',
          title: '학습 노트 3',
          contents: '학습 내용 3',
          createdAt: new Date(),
        },
        {
          _id: '4',
          title: '학습 노트 4',
          contents: '학습 내용 4',
          createdAt: new Date(),
        },
        {
          _id: '5',
          title: '학습 노트 5',
          contents: '학습 내용 5',
          createdAt: new Date(),
        },
      ],
    };
  },
};
</script>

<style>
.cursor-pointer {
  cursor: pointer;
}
</style>
