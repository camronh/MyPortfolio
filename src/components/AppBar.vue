<template>
  <v-app-bar app dark color="primary">
    <v-toolbar-title class="title">Camron Haider's Portfolio</v-toolbar-title>
    <v-spacer></v-spacer>
    <SkillsMenu />
  </v-app-bar>
</template>

<script>
import SkillsMenu from "./SkillsMenu.vue";

export default {
  components: {
    SkillsMenu,
  },
  data() {
    return {
      title: "My Portfolio",
      dialog: false,
    };
  },
};
</script>

<style scoped>
.title {
  font-size: 18px;
}
</style>
