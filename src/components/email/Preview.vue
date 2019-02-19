<template>
  <div class="preview">
    <div class="preview__inner">
      <div class="preview__header">
        <el-row>
          <el-col :span="12"><h2>Email preview</h2></el-col>
          <el-col
            :span="12"
            style="text-align: right;"
          >
            <el-switch
              class="switch"
              active-text="Desktop"
              inactive-text="Mobile"
              active-color="#409eff"
              inactive-color="#409eff"
            />
          </el-col>
        </el-row>

      </div>
      <div class="email">
        <div class="add-new-block">
          <div>add new block</div>
          <svg-icon icon="plus" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon'

export default {
  name: 'EmailPreview',

  components: {
    SvgIcon
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

.preview {
  background-color: #f6f6f6;
  padding: 0;
  overflow-y: auto;
  display: grid;
  grid-template-rows: 100px 1fr;
  &__header {
    margin-bottom: 20px;
  }
  &__inner {
    max-width: 600px;
    width: 100%;
    padding: 40px 0 20px 0;
    margin: 0 auto;
  }
  &__footer {
    max-width: 600px;
    text-align: right;
    align-self: flex-end;
  }
  h2 {
    line-height: 0;
  }
  p {
    margin: 0;
  }
  .actions {
    text-align: right;
    margin-top: 20px;
  }
}
.switch {
  position: relative;
  top: 9px;
}
</style>
