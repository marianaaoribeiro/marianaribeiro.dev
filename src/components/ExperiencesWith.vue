<template>
  <div id="experiences" class="py-7">
    <v-container>
      <v-row>
        <v-col cols="12">
          <p class="text-h4 font-weight-bold text-center">
            <v-icon small color="tertiary"> far fa-circle-dot </v-icon>
            Experiências
          </p>
        </v-col>
      </v-row>
      <v-timeline dense clipped>
        <v-timeline-item
          v-for="(item, index) in timelineContain"
          :key="index"
          class="mb-4"
          :hide-dot="index == 0"
          small
        >
          <v-row justify="space-between">
            <v-col cols="'2" sm="9" class="title">
              {{ item.title }}
            </v-col>
            <v-col class="text-right" cols="'2" sm="3">
              {{ item.date }}
            </v-col>
            <v-col cols="12">
              <ul>
                <li v-for="(l, i) in item.items" :key="i">{{ l }}</li>
              </ul>
            </v-col>
          </v-row>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    timelineContain: [
      {
        title: "Desenvolvedora Frontend, Fundação Carlos Chagas",
        items: [
          "Criação de projeto backoffice para atendimento ao candidato",
          "Criação de painel de Gabarito e Provas para aluno de concurso",
          "Implementação de pipelines para deploy automatizado de projetos",
        ],
        date: "2022 - Atual",
      },
      {
        title: "Desenvolvedora Frontend, Keycash",
        items: [
          "Participei ativamente de celebrações Scrum e refinamentos de tasks",
          "Desenvolvemos plataformas backoffice e plataforma de analize de crédito para parceiros como Porto Seguro utilizando Vue.js",
          "Revisão e aprovação de códigos",
          "Contribuía ativamente em discussões técnicas e revisões de código",
        ],
        date: "2021 - 2022",
      },
      {
        title: "Estagiária em Desenvolvimento Front End, Keycash",
        items: [
          "Contribuir no desenvolvimento evolutivo da plataforma",
          "Participação de reuniões e discussões técnicas junto ao time de desenvolvedores para desenvolvimento da plataforma",
          "Execução das atividades diárias com qualidade em conjunto com a equipe técnica",
        ],
        date: "2020 - 2021",
      },
    ],
  }),

  computed: {
    timeline() {
      return this.events.slice().reverse();
    },
  },
};
</script>
