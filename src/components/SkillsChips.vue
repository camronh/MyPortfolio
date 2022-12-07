<template>
  <v-row align="center" justify="center">
    <v-chip-group multiple v-model="selected">
      <v-chip
        v-for="skill in skills"
        :key="skill"
        outlined
        active-class="primary--text"
        @click="selectSkill(skill)"
      >
        {{ skill }}
      </v-chip>
    </v-chip-group>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      selected: [],
      skills: this.$store.getters.uniqueSkills,
      disabled: false,
    };
  },
  watch: {
    selected() {
      const selectedSkills = this.selected.map((i) => this.skills[i]);
      this.$emit("selected", selectedSkills);
    },
  },
  methods: {
    selectSkill() {
      //   console.log({ selected: this.selected });
    },
  },
};
</script>
