<template>
  <div id="contact" class="py-8 mt-8 primary white--text">
    <v-container>
      <v-row>
        <v-col cols="12">
          <p class="text-h4 font-weight-bold white--text">
            <v-icon small color="tertiary"> far fa-circle-dot </v-icon>
            Contato
          </p>
          <v-divider dark class="my-7" />
          <v-row>
            <v-col  cols="12" sm="6">
              <p v-for="(item, index) in contacts" :key="index">
                <v-icon small color="tertiary" class="mr-3">
                  {{ item.icon }}
                </v-icon>
                {{ item.text }}
              </p>
            </v-col>
            <v-col cols="12" sm="6">
              <p v-for="(item, index) in links" :key="index">
                <a
                  :href="item.link"
                  target="_blank"
                  class="text-decoration-none white--text"
                >
                  <v-icon small color="tertiary" class="mr-3">
                    {{ item.icon }}
                  </v-icon>
                  {{ item.text }}
                </a>
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    contacts: [
      {
        icon: "fa-solid fa-envelope",
        text: "me@marianaribeiro.dev",
      },
      {
        icon: "fas fa-phone",
        text: "+55 (11) 94833-2949",
      },
    ],
    links: [
      {
        icon: "fab fa-linkedin",
        text: "linkedin.com/in/mariana-alves-oliveira-ribeiro/",
        link: "https://www.linkedin.com/in/mariana-alves-oliveira-ribeiro/",
      },
      {
        icon: "fab fa-github",
        text: "github.com/marianaaoribeiro",
        link: "https://github.com/marianaaoribeiro",
      },
    ],
  }),
};
</script>
