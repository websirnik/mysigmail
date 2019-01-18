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
  padding: 40px 50px 20px 50px;
  overflow-y: auto;
  display: grid;
  grid-template-rows: 1fr 50px;
  &__header {
    margin-bottom: 20px;
  }
  &__inner {
    max-width: 900px;
  }
  &__footer {
    max-width: 900px;
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
.email {
  background-color: #fff;
  min-height: 350px;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
}
 .switch {
    position: relative;
    top: 9px;
  }

</style>
