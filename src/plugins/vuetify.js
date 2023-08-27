import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@fortawesome/fontawesome-free/css/all.css'
import pt from 'vuetify/lib/locale/pt'
import en from 'vuetify/lib/locale/en'
Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'fa',
      },
      theme: {
        options: {
          customProperties: true,
        },
        themes: {
          light: {
            primary: '#140522',
            secondary: '#C6C6C6',
            accent: '#28b6f3',
            tertiary: '#DE296B',
            success: '#4CAF50',
            error: '#F44336',
            background: '#f1f1f1',
          },
        },
      },
      lang: {
        locales: { en, pt },
        current: 'pt',
      },
});
