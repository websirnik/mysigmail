<template>
  <table
    cellpadding="0"
    cellspacing="0"
    border="0"
    :style="style"
    class="block"
    :class="{
      'is-active': isSelected,
      'is-init': !type
    }"
    @click="onSelectBlock"
  >
    <component
      :is="asyncLoadBLock"
      :index="index"
    />
    <block-placeholder
      v-if="!type"
      @add-type="onAddType"
    />
  </table>
</template>

<script>
import { mapState } from 'vuex'
import BlockPlaceholder from './BlockPlaceholder'

export default {
  name: 'BlockItem',

  components: {
    BlockPlaceholder
  },

  props: {
    type: {
      type: String,
      default: undefined
    },
    index: {
      type: Number,
      default: null
    }
  },

  data () {
    return {
      style: {
        width: '100%',
        verticalAlign: 'middle'
      }
    }
  },

  computed: {
    ...mapState({
      blocks: 'emailBlocks'
    }),
    asyncLoadBLock () {
      switch (this.type) {
        case 'heading': return () => import('./types/HeadingBlock')
        case 'text': return () => import('./types/TextBlock')
        case 'image': return () => import('./types/ImageBlock')
        case 'button': return () => import('./types/ButtonBlock')
        case 'disclaimer': return () => import('./types/DisclaimerBlock')
      }
    },
    isSelected () {
      return this.type && this.index === this.blocks.selected
    }
  },

  methods: {
    onAddType (v) {
      this.$store.dispatch('setBlockType', { index: this.index, type: v })
      this.$store.commit('SET_BLOCK_SELECTED', this.index)
    },
    onSelectBlock () {
      this.$store.commit('SET_BLOCK_SELECTED', this.index)
    },
    onCopy () {
      this.$store.commit('COPY_BLOCK', this.index)
    },
    onRemove () {
      this.$store.commit('REMOVE_BLOCK', this.index)
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.block {
  position: relative;
  &:hover {
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      content: '';
      background-color: $color-gold;
      opacity: 0.15;
      pointer-events: none;
    }
  }
  &.is-init {
    padding: 25px 0;
    outline: 2px dashed $color-grey-100;
    outline-offset: -1px;
    &:hover {
      &::after {
        opacity: 0;
      }
    }
  }
  &.is-active {
    outline: 2px dashed $color-blue !important;
    outline-offset: -1px;
    &:hover {
      &::after {
        opacity: 0;
      }
    }
  }
}
</style>
