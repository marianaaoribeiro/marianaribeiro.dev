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
      <div class="mr-8">
        <v-tabs background-color="primary">
          <v-tab class="text-none">Início</v-tab>
          <v-tab class="text-none">Sobre</v-tab>
          <v-tab class="text-none">Tecnologias</v-tab>
          <v-tab class="text-none">Contato</v-tab>
        </v-tabs>
      </div>
    </v-app-bar>
  </div>
</template>
