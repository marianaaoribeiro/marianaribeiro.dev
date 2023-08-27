<template>
  <div id="education" class="py-5">
    <v-container>
      <v-row>
        <v-col cols="12">
          <p class="text-h4 font-weight-bold text-center">
            <v-icon small color="tertiary"> far fa-circle-dot </v-icon>
            Formação
          </p>
        </v-col>

        <v-col
          cols="12" sm="6"
          v-for="(item, index) in education"
          :key="index"
          align="center"
        >
          <img
            :src="item.src"
            :alt="item.alt"
            width="150"
            :class="index == 1 ? 'mb-2' : ''"
          />
          <p class="title ml-7">{{ item.name }}</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    education: [
      {
        src: require("@/assets/fiap.png"),
        name: "Graduação em Análise e Desenvolvimento de Sistemas, FIAP, 2021.",
        alt: "fiap",
      },
      {
        src: require("@/assets/etec.png"),
        name: "Técnico em Desenvolvimento de Sistemas, ETEC, 2019.",
        alt: "etec",
      },
    ],
  }),
};
</script>
