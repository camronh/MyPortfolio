<template>
  <v-btn icon @click="dialog = true">
    <v-icon>mdi-information-outline</v-icon>
    <v-dialog v-model="dialog" max-width="700px">
      <v-card>
        <v-card-title>
          <span class="headline"
            >Camron Haider
            <v-btn link href="https://github.com/" target="_blank" icon small>
              <v-icon color="purple">mdi-github</v-icon>
            </v-btn>
            <v-btn link href="https://github.com/" target="_blank" icon small>
              <v-icon color="blue">mdi-linkedin</v-icon>
            </v-btn>
          </span>
          <v-spacer></v-spacer>
        </v-card-title>

        <v-card-text>
          <v-card-title>Languages and Frameworks</v-card-title>
          <v-row dense>
            <v-col cols="6" v-for="skill in skills" :key="skill.name">
              <v-list>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-subtitle>
                      {{ skill.name }} ({{ skill.years }} Years)
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>
                      <v-progress-linear
                        :value="skill.rating * 10"
                        color="blue"
                        height="7"
                      ></v-progress-linear>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Close</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-btn>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    skills: [
      { name: "Javascript", years: 5, rating: 9 },
      { name: "Vue.js", years: 3, rating: 8 },
      { name: "Java", years: 4, rating: 7 },
      { name: "Python", years: 2, rating: 6 },
    ],
  }),
};
</script>
