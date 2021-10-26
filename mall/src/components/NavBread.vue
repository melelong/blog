<template>
  <div class="nav-breadcrumb-wrap">
      <div class="container">
        <nav class="nav-breadcrumb">
          <a href="javascript:void(0)" @click="goHomepage">首页</a>
          <slot name="bread"></slot>
          <slot name="abc"></slot>
        </nav>
      </div>
    </div>
</template>
<script>
export default {
  name: 'NavHeader',
  props: {
    mdshow: Boolean
  },
  data () {
    return {
    }
  },
  methods: {
    goHomepage () {
      if (this.$route.path !== '/') {
        this.$router.push({
          path: '/'
        })
      }
    }
  }
}
</script>
