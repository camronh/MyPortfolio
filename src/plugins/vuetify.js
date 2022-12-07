import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  options: {
    customProperties: true,
    typography: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 600
    }
  },
  theme: {
    themes: {
      light: {
        primary: '#007aff',
        secondary: '#8e8e93',
        accent: '#006400',
        error: '#ff0000'
      }
    }
  }
});
