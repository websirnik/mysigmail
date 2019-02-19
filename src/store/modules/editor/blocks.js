import { guid } from '../../../util/helpers'

export default {
  state: {
    list: [],
    types: [
      { label: 'Heading', name: 'heading' },
      { label: 'Text', name: 'text' },
      { label: 'Image', name: 'image' },
      { label: 'Button', name: 'button' },
      { label: 'Disclaimer', name: 'disclaimer' }
    ],
    typeOptions: {
      heading: {
        color: '',
        fontSize: ''
      }
    },
    presets: {
      heading: {
        h1: { fontSize: '32px' },
        h2: { fontSize: '24px' },
        h3: { fontSize: '18px' }
      }
    },
    selected: null
  },
  getters: {},
  mutations: {
    ADD_EMPTY_BLOCK (state) {
      const index = state.list.findIndex(i => i.type === undefined)
      if (index > -1) return

      const block = {
        id: guid(),
        type: undefined,
        typeOptions: {},
        blockOptions: {
          align: 'center',
          padding: '0',
          backgroundColor: '#ffffff'
        }
      }

      state.list.push(block)
      state.selected = null
    },
    SET_BLOCK_TYPE (state, { index, type }) {
      state.list[index].type = type
      state.list[index].typeOptions = { ...state.typeOptions[type] }
    },
    // SET_BLOCK_TYPE_OPTIONS (state, data) {},
    // SET_BLOCK_OPTIONS (state, data) {},
    SET_BLOCK_SELECTED (state, index) {
      state.selected = index
    },
    COPY_BLOCK (state, index) {
      const clonedBlock = { ...state.list[index] }
      clonedBlock.id = guid()
      state.list.splice(index, 0, clonedBlock)
    },
    REMOVE_BLOCK (state, index) {
      state.list.splice(index, 1)
    }
  },
  actions: {
    setBlockType ({ state, commit }, { index, type }) {
      commit('SET_BLOCK_TYPE', { index, type })
      commit('SET_BLOCK_SELECTED', state.list.length - 1)
    }
  }
}
