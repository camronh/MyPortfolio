<template>
  <v-app>
    <AppBar app/>
    <br />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar.vue";

export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    AppBar,
  },
};
</script>
