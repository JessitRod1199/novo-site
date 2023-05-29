import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import es from 'vuetify/lib/locale/es';
import 'vuetify/dist/vuetify.min.css';
Vue.use(Vuetify);

export default new Vuetify({

    theme: {
        dark: false,
        options: {
          customProperties: true,
        },
        themes: {
          light: {
            primary: "#ffffff",
            secondary: "#a9c62c",
            accent: "#f06a25",
            error: "#FF5252",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FFC107",
          },
          dark: {
            primary: "#ffffff",
            secondary: "#a9c62c",
            accent: "#f06a25",
            error: "#FF5252",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FFC107",
      },
    },
  },
  lang: {
    current: "es",
  },
  icons: {
    iconfont: "fa",
  },


})
