<template>
  <div class="disclaimer-addon">
    <el-input
      v-model="footnote"
      type="textarea"
      :rows="6"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Footnote',

  computed: {
    ...mapState(['addons']),
    footnote: {
      get () {
        return this.addons.footnote
      },
      set (v) {
        this.$store.dispatch('updateFootnote', v)
      }
    }
  }
}
</script>

<style lang="scss">

</style>
