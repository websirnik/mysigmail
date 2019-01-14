<template>
  <div class="top-bar">
    <div class="logo">
      <img
        src="../../logo.png"
        alt="logo"
      >
    </div>
    <nav>
      <router-link to="/signature">Signature editor</router-link>
      <router-link to="/email">Email editor</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'TopNav',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/variables.scss';

.top-bar {
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  padding: 0 10px;
  .logo {
    width: 65px;
    img {
      width: 100%
    }
  }
  nav {
    padding: 0 20px;
    a {
      display: inline-block;
      text-decoration: none;
      color: #000;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 600;
      &.active {
        color: $color-primary;
      }
      + a {
        margin-left: 10px;
      }
    }
  }
}
</style>
