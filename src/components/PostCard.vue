<template>
  <div class="card shadow rounded text-center m-auto" style="width: 80%">
    <div class="card-header">
      <h3>{{ item.title }}</h3>
    </div>
    <div class="card-body" style="min-height: 200px">
      <p class="text-left">{{ item.contents }}</p>
    </div>
    <div class="card-footer">
      <p class="text-right">
        {{ item.createdAt | dateToString }}
        <i class="fa fa-pencil mx-2" @click="editPost" />
        <i class="fa fa-trash mx-2"></i>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    editPost() {
      this.$router.push(`/post/edit/${this.item._id}`);
    },
  },
  filters: {
    dateToString(value) {
      const date = new Date(value);
      const yyyy = date.getFullYear();

      let mm = (date.getMonth() + 1).toString();
      if (mm.length === 1) {
        mm = '0' + mm;
      }

      let dd = date.getDate().toString();
      if (dd.length === 1) {
        dd = '0' + dd;
      }

      let HH = date.getHours().toString();
      if (HH.length === 1) {
        HH = '0' + HH;
      }

      let MM = date.getMinutes().toString();
      if (MM.length === 1) {
        MM = '0' + MM;
      }

      return `${yyyy}-${mm}-${dd} ${HH}:${MM}`;
    },
  },
};
</script>

<style>
i:hover {
  opacity: 0.5;
}
</style>
