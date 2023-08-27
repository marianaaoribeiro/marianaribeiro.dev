<template>
  <div id="skills" class="py-5">
    <v-container>
      <v-row>
        <v-col cols="12">
          <p class="text-h4 font-weight-bold text-center">
            <v-icon small color="tertiary"> far fa-circle-dot </v-icon>
            Tecnologias
          </p>
        </v-col>
        <v-col
          cols="6"
          md="2"
          sm="4"
          v-for="(item, index) in skills"
          :key="index"
          align="center"
          align-self="center"
        >
          <img :src="item.src" :alt="item.alt" width="80" />
          <p class="mt-2 subtitle-1">{{ item.name }}</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    skills: [
      {
        src: require("@/assets/vue.png"),
        name: "Vue.js",
        alt: "vue",
      },
      {
        src: require("@/assets/nuxt.png"),
        name: "Nuxt.js",
        alt: "nuxt",
      },
      {
        src: require("@/assets/typescript.png"),
        name: "Typescript",
        alt: "typescript",
      },
      {
        src: require("@/assets/git.png"),
        name: "Git",
        alt: "vgitue",
      },
      {
        src: require("@/assets/css.png"),
        name: "CSS",
        alt: "css",
      },
      {
        src: require("@/assets/html.png"),
        name: "HTML",
        alt: "html",
      },
    ],
  }),
};
</script>
