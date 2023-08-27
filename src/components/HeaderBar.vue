<template>
  <div>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('@/assets/mariana.svg')"
          transition="scale-transition"
          width="160"
        />
      </div>
      <v-spacer />
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.mobile"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
      <div class="mr-8" v-else>
        <v-tabs v-model="tab" background-color="primary">
          <v-tab
            v-for="(item, index) in routes"
            :key="index"
            class="text-none"
            >{{ item.name }}</v-tab
          >
        </v-tabs>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      dark
      app
      temporary
      class="primary"
      right
    >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="(item, index) in routes" :key="index">
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    tab: null,
    group: null,
    routes: [
      {
        name: "Início",
        to: "",
      },
      {
        name: "Sobre",
        to: "",
      },
      {
        name: "Tecnologias",
        to: "",
      },
      {
        name: "Contato",
        to: "",
      },
    ],
  }),
};
</script>
