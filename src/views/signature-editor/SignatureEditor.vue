<template>
  <div class="signature-view">
    <top-bar />
    <sidebar :nav="sidebar" />
    <config-panel />
    <preview />
  </div>
</template>

<script>
import TopBar from '@/components/TopBar'
import Sidebar from '@/components/Sidebar'
import ConfigPanel from '@/components/ConfigPanel'
import Preview from '@/components/signature/Preview'
import nav from '@/db/navigation'

export default {
  name: 'SignatureEditor',

  components: {
    TopBar,
    Sidebar,
    ConfigPanel,
    Preview
  },

  data () {
    return {
      sidebar: nav.signature.sidebar
    }
  }
}
</script>

<style lang="scss">
.signature-view {
  display: grid;
  grid-template-columns: 85px 550px 1fr;
  grid-template-rows: 50px 1fr;
  height: 100vh;
  grid-template-areas:
  "header header header"
  "sidebar config preview";
  .top-bar {
    grid-area: header;
  }
  .sidebar {
    grid-area: sidebar
  }
  .config-panel {
    grid-area: config
  }
  .preview {
    grid-area: preview
  }
}
</style>
