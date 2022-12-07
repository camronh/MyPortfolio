// views/ProjectDetails.vue
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card flat>
          <v-carousel
            height="500px"
            cycle
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item
              v-for="(image, i) of selectedProject.images"
              :key="i"
            >
              <v-img :src="image" height="600px" class="white--text align-end">
              </v-img>
            </v-carousel-item>
          </v-carousel>
          <v-card-title >{{ selectedProject.title }}</v-card-title>

          <v-card-text>
            <br />
            <b>Languages and Frameworks:</b> {{ selectedProject.skills.join(", ") }}
            <br />
            <b>Website: </b>
            <a :href="selectedProject.website">{{ selectedProject.website }}</a>
            <br />
            <br />
            {{ selectedProject.longDescription || selectedProject.description }}
            <br />
          </v-card-text>
          <v-card-actions>
            <v-btn text color="primary" @click="$router.back()">
              Back to projects
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ProjectDetails",
  props: ["id"],
  data() {
    return {
      projects: this.$store.state.projects,
    };
  },
  computed: {
    selectedProject() {
      return this.projects.find(
        (project) => Number(project.id) === Number(this.id)
      );
    },
  },
};
</script>
