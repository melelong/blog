<template>
  <div>
    <div class="md-modal modal-msg md-modal-transition" v-bind:class="{'md-show': mdshow}">
          <div class="md-modal-inner">
            <div class="md-top">
              <a class="md-close" id="close" @click="closeModal">Close</a>
            </div>
            <div class="md-content">
              <div class="confirm-tips">
                <slot name="message"></slot>
              </div>
              <div class="btn-wrap">
                <slot name="btnGroup"></slot>
              </div>
            </div>
          </div>
        </div>
        <div class="md-overlay" v-if="mdshow" @click="closeModal"></div>
  </div>
</template>
<script>
export default {
  name: 'Modal',
  props: ['mdshow'],
  data () {
    return {
      msg: 'hello vue'
    }
  },
  methods: {
    closeModal () {
      this.$emit('close')
    }
  }
}
</script>
