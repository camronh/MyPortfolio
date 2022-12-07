<template>
  <v-container>
    <v-card flat>
      <MyBio />
      <SkillsChips @selected="onSkillSelected" />
      <br />
      <v-divider></v-divider>
      <br />
      <ProjectContainer :skills="selectedSkills" />
    </v-card>
  </v-container>
</template>

<script>
import MyBio from "../components/MyBio.vue";
import SkillsChips from "../components/SkillsChips.vue";
import ProjectContainer from "../components/ProjectContainer.vue";

export default {
  name: "HomeView",

  components: {
    MyBio,
    SkillsChips,
    ProjectContainer,
  },
  data() {
    return {
      selectedSkills: [],
    };
  },
  methods: {
    onSkillSelected(selected) {
      console.log({ selected });
      this.selectedSkills = selected;
    },
  },
};
</script>
