<template>
<div id="app">
<headerNav></headerNav>
<router-view></router-view>
</div>
</template>

<script>
import headerNav from '@/components/partials/header/Header';

export default {
  name: 'App',
  components: {
    headerNav,
  },
};
</script>

<style lang="scss">
@import './assets/sass/main.scss';
</style>
