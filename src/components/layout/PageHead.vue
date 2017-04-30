<template>
  <div class="page-head">
    <div class="container">
      <!-- BEGIN PAGE TITLE -->
      <div class="page-title">
        <h1>{{ name }}
          <small>{{ details }}</small>
        </h1>
      </div>
      <!-- END PAGE TITLE -->
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      name () {
        return this.getItem().name
      },
      details () {
        return this.getItem().description
      }
    },
    methods: {
      getItem () {
        let matched = this.$route.matched.filter(item => item.name)
        let item = matched[matched.length - 1]
        return item
      }
    }
  }
</script>
