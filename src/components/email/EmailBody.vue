<template>
  <table
    cellpadding="0"
    cellspacing="0"
    border="0"
    :style="style"
    class="email-body"
  >
    <slot />
    <div
      editor
      class="add-new-block"
      @click="onAddBlock"
    >
      <div>add new block</div>
      <svg-icon icon="plus" />
    </div>
  </table>
</template>

<script>
import SvgIcon from '@/components/SvgIcon'

export default {
  name: 'EmailBody',

  components: {
    SvgIcon
  },

  data () {
    return {
      style: {
        maxWidth: '600px',
        width: '100%',
        margin: '0 auto',
        minHeight: '150px',
        backgroundColor: '#fff'
      }
    }
  },

  methods: {
    onAddBlock () {
      this.$store.commit('ADD_EMPTY_BLOCK')
    }
  }
}
</script>

<style lang="scss">
.add-new-block {
  color: #ddd;
  padding-top: 30px;
  text-align: center;
    svg {
      padding: 5px;
      width: 24px;
      stroke: #ddd;
      cursor: pointer;
    }
  }
</style>
