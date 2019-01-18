<template>
  <div class="layout">
    <el-form
      label-position="left"
      label-width="150px"
    >
      <h3>Text</h3>
      <el-form-item label="Size">
        <el-input />
      </el-form-item>
      <el-form-item label="Color">
        <el-color-picker />
      </el-form-item>
      <h3>Link</h3>
      <el-form-item label="Color">
        <el-color-picker />
      </el-form-item>
      <h3>Padding</h3>
      <el-form-item label="Size">
        <el-input />
      </el-form-item>
      <h3>Border</h3>
      <el-form-item label="Width">
        <el-input />
      </el-form-item>
      <el-form-item label="Radius">
        <el-input />
      </el-form-item>
      <el-form-item label="Color">
        <el-color-picker />
      </el-form-item>
      <h3>Background</h3>
      <el-form-item label="Color">
        <el-color-picker />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Layout',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

</style>
