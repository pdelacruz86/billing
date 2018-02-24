<template>
 <!-- BEGIN PAGE BREADCRUMBS -->
 <ul class="page-breadcrumb breadcrumb">
  <li v-for="(item, index) in list">
    <span v-if="isLast(index)">{{ showName(item) }}</span>
    <router-link :to="{ path: item.path}" v-else>{{ showName(item) }}</router-link>
    <i class="fa fa-circle" v-if="!isLast(index)"></i>
  </li>
</ul>
<!-- END PAGE BREADCRUMBS -->
</template>

<script>
export default {
  data() {
    return {
      list: null
    };
  },

  created() {
    this.getList();
  },

  methods: {
    getList() {
      let matched = this.$route.matched.filter(item => item.name);
      let first = matched[0];
      if (first && (first.name !== "Home" || first.path !== "")) {
        matched = [{ name: "Home", path: "/" }].concat(matched);
      }
      this.list = matched;
    },
    isLast(index) {
      return index === this.list.length - 1;
    },
    showName(item) {
      return (item.meta && item.meta.label) || item.name;
    }
  },

  watch: {
    $route() {
      this.getList();
    }
  }
};
</script>
