<template>
  <div class="interactivepitch-addon">
    <el-form size="small">
      <el-form-item label="Text">
        <el-input
          v-model="text"
        />
      </el-form-item>

      <el-form-item label="Link">
        <el-input
          v-model="link"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'InteractivePitch',

  computed: {
    ...mapState(['addons']),
    text: {
      get () {
        return this.addons.interactivePitch.text
      },
      set (v) {
        this.$store.dispatch('updateInteractivePitch', { key: 'text', payload: v })
      }
    },
    link: {
      get () {
        return this.addons.interactivePitch.link
      },
      set (v) {
        this.$store.dispatch('updateInteractivePitch', { key: 'link', payload: v })
      }
    }
  }
}
</script>

<style lang="scss">

</style>
