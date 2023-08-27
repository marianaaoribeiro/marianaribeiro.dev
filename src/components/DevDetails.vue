<template>
  <v-card class="bg-avatar rounded-0" dark id="devDetails">
    <v-container class="py-16">
      <v-row justify="center">
        <v-col cols="12" sm="6" align="center">
          <v-avatar size="250" class="mr-avatar">
            <img :src="require('@/assets/avatar.jpeg')" alt="Mariana" />
          </v-avatar>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          align-self="center"
          :align="$vuetify.breakpoint.mobile ? 'center' : ''"
        >
          <div class="title">Olá, eu sou a</div>
          <div class="tertiary--text font-weight-bold text-h3">
            Mariana Ribeiro
          </div>
          <p class="title">Desenvolvedora Front-end</p>
          <v-btn
            outlined
            class="rounded-lg"
            dense
            target="_blank"
            href="https://drive.google.com/u/0/uc?id=1Lzd-cy7YMSYA7wkgbwNXHFdQlkWRyTKQ&export=download"
          >
            Baixar Currículo
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script></script>
<style scoped>
.mr-avatar {
  border: 3px solid white;
}

.bg-avatar {
  background-image: url("../assets/bg-avatar.svg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
