import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [
      {
        id: 1,
        title: "Lottery Smart Contract Tutorial",
        website: "https://lottery-tutorial.api3.org/",
        description:
          "A beginners smart contract tutorial that incorporates API3's Airnode serverless software.",
        images: ["https://picsum.photos/900/500"],
        skills: ["Node.js", "Solidity", "Docker", "Web3"],
        longDescription: "",
      },
      {
        id: 2,
        title: "Airnode Integrations Wizard",
        website: "https://lottery-tutorial.api3.org/",
        description:
          "An easy-to-use GUI for creating and managing Airnode configuration files from APIs.",
        longDescription: "",
        images: ["https://picsum.photos/900/500"],
        skills: [
          "Node.js",
          "Vue.js",
          "Docker",
          "AWS",
          "DynamoDB",
          "Lambda",
          "Express.js",
          "Web3",
          "Solidity",
        ],
      },
      {
        id: 3,
        longDescription: "",
        title: "BibleBot",
        website: "https://lottery-tutorial.api3.org/",
        description: "Ask any question and have it answered by the Bible.",
        images: ["https://picsum.photos/900/500"],
        skills: ["Node.js", "Vue.js", "Express.js", "Lambda", "AWS", "AI/ML"],
      },
      {
        id: 4,
        title: "DecentRaffle",
        longDescription: "",
        website: "https://lottery-tutorial.api3.org/",
        description:
          "A decentralized raffle smart contract that uses the Airnode Oracle.",
        images: ["https://picsum.photos/900/500"],
        skills: [
          "Node.js",
          "Vue.js",
          "Express.js",
          "AWS",
          "Lambda",
          "Solidity",
          "Web3",
          "Docker",
        ],
      },
      {
        id: 5,
        title: "StockBets PoC",
        description:
          "A Proof-of-Concept that uses Airnode to send API requests from a smart contract to query data directly from DxFeed's public stock price API.",
        longDescription: "",
        images: ["https://picsum.photos/900/500"],
        skills: [
          "Node.js",
          "Vue.js",
          "Express.js",
          "Lambda",
          "AWS",
          "Solidity",
          "Web3",
        ],
      },
      {
        id: 6,
        title: "Wake",
        description: "A cloud-based sneaker bot.",
        longDescription: "",
        images: ["https://picsum.photos/900/500"],
        skills: [
          "Node.js",
          "Vue.js",
          "Express.js",
          "Lambda",
          "DynamoDB",
          "AWS",
          "Docker",
          "Terraform",
        ],
      },
      {
        id: 7,
        title: "Brazy Proxies",
        description: "A VPN service for sneaker bots.",
        longDescription: "",
        images: ["https://picsum.photos/900/500"],
        skills: [
          "Node.js",
          "Vue.js",
          "Express.js",
          "Lambda",
          "DynamoDB",
          "AWS",
        ],
      },
    ],
  },
  getters: {
    uniqueSkills: (state) => {
      let skills = [];
      state.projects.forEach((project) => {
        skills = skills.concat(project.skills);
      });
      return [...new Set(skills)];
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
