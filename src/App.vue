<template>
  <v-app>
    <router-view name="header">
      <header-bar />
    </router-view>
    <v-main class="bg-color">
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
import headerBar from '@/components/HeaderBar'
export default {
  name: 'App',
  components: {
    headerBar,
  },
}
</script>
<style lang="scss">

html,

#app {
  background-color: #F6F6F6;
  font-family: "Inter" sans-serif;
}
</style>
