<template>
  <div class="email-view">
    <top-bar />
    <sidebar :nav="sidebar" />
    <config-panel />
  </div>
</template>

<script>
import TopBar from '@/components/TopBar'
import Sidebar from '@/components/Sidebar'
import ConfigPanel from '@/components/ConfigPanel'
import nav from '@/db/navigation'

export default {
  name: 'EmailEditor',

  components: {
    TopBar,
    Sidebar,
    ConfigPanel
  },

  data () {
    return {
      sidebar: nav.email.sidebar
    }
  }
}
</script>

<style lang="scss">
.email-view {
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
