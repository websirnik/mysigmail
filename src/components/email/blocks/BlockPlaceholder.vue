<template>
  <div
    editor
    class="block-placeholder"
  >
    <div class="types">
      <span
        v-for="i in blocks.types"
        :key="i.name"
        class="types__item"
        @click="$emit('add-type', i.name)"
      >
        {{ i.name }}
      </span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BlockPlaceholder',

  data () {
    return {

    }
  },

  computed: {
    ...mapState({
      blocks: 'emailBlocks'
    })
  }
}
</script>

<style lang="scss">
@import '../../../assets/scss/variables';

.block-placeholder {
  // width: 100%;
  // outline: 2px dashed #ccc;
  // outline-offset: -1px;
  // // padding: 25px 0;
  // &:hover {
  //   &::after {
  //     opacity: 0;
  //   }
  // }
}

.types {
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
  &__item {
    color: $color-grey-200;
    padding: 0 10px;
    cursor: pointer;
    &:hover {
      color: $color-primary;
    }
  }
}
</style>
