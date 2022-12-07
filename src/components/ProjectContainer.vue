<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        md="6"
        v-for="project in filteredProjects"
        :key="project.id"
      >
        <v-card class="d-flex flex-column" height="100%">
          <v-carousel
            height="250px"
            cycle
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item v-for="(image, i) of project.images" :key="i">
              <v-img :src="image" height="250px" class="white--text align-end">
              </v-img>
            </v-carousel-item>
          </v-carousel>

          <v-card-title>{{ project.title }}</v-card-title>
          <v-card-text>
            {{ project.description }}
            <br />
            <br />
            <b>Languages and Frameworks:</b> {{ project.skills.join(", ") }}
          </v-card-text>
          <v-card-actions class="mt-auto">
            <v-btn
              block
              text
              color="primary"
              @click="
                $router.push({
                  name: 'ProjectDetails',
                  params: { id: project.id },
                })
              "
            >
              View project
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ProjectContainer",
  props: ["skills"],
  data() {
    return {
      projects: this.$store.state.projects,
      //   projects: [
      //     {
      //       id: 1,
      //       title: "Lottery Smart Contract Tutorial",
      //       description:
      //         "A beginners smart contract tutorial that incorporates API3's Airnode serverless software.",
      //       images: ["https://picsum.photos/900/500"],
      //       skills: ["Node.js", "Solidity", "Docker", "Web3"],
      //     },
      //     {
      //       id: 2,
      //       title: "Airnode Integrations Wizard",
      //       description:
      //         "An easy-to-use GUI for creating and managing Airnode configuration files from APIs.",
      //       images: ["https://picsum.photos/900/500"],
      //       skills: [
      //         "Node.js",
      //         "Vue.js",
      //         "Docker",
      //         "AWS",
      //         "DynamoDB",
      //         "Lambda",
      //         "Express.js",
      //         "Web3",
      //         "Solidity",
      //       ],
      //     },
      //     {
      //       id: 3,
      //       title: "BibleBot",
      //       description: "Ask any question and have it answered by the Bible.",
      //       images: ["https://picsum.photos/900/500"],
      //       skills: ["Node.js", "Vue.js", "Express.js", "Lambda", "AI/ML"],
      //     },
      //     {
      //       id: 4,
      //       title: "DecentRaffle",
      //       description:
      //         "A decentralized raffle smart contract that uses the Airnode Oracle.",
      //       images: ["https://picsum.photos/900/500"],
      //       skills: [
      //         "Node.js",
      //         "Vue.js",
      //         "Express.js",
      //         "Lambda",
      //         "Solidity",
      //         "Web3",
      //         "Docker",
      //       ],
      //     },

      //     // etc.
      //   ],
    };
  },
  computed: {
    filteredProjects() {
      console.log(this.skills);
      if (this.skills.length === 0) {
        return this.projects;
      }
      return this.projects.filter((project) => {
        for (const skill of project.skills) {
          console.log({ skill });
          if (this.skills.includes(skill)) {
            return true;
          }
        }
        return false;
      });
    },
  },
  methods: {
    viewProject(id) {
      console.log(id);
      // Navigate to the project details page for the project with the given ID
    },
  },
};
</script>
