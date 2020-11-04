<template>
  <v-app>
    <v-app-bar
      app
      color="pink lighten-3"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Cute Squid"
          class="shrink mr-2"
          contain
          src="https://img.freepik.com/free-vector/squid-cartoon_119631-95.jpg?size=338&ext=jpg"
          transition="scale-transition"
          width="40"
        />

      </div>

      <v-spacer></v-spacer>
      <v-btn color="pink darken-1">
        Créer un Squizz
      </v-btn>

    </v-app-bar>

    <v-main>
      <v-list dense>
        <v-subheader>REPORTS</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item v-for="quizz in quizzes" :key="quizz.id">
            <v-list-item-content>
              <v-list-item-title v-text="quizz.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <QuizzPage idQuizz="5fa1ef16635171317b40559c"></QuizzPage>
    </v-main>
  </v-app>
</template>

<script>
//import Leaderboard from "@/components/Leaderboard";
import gql from 'graphql-tag'
import QuizzPage from "./components/QuizzPage";


export default {
  name: 'App',
  beforeMount() {
      console.log(this.$apollo);
      this.$apollo.queries.quizzes.refetch();
  },

  components: {
      QuizzPage,
      //Leaderboard
  },

  data: () => ({
      quizzes: {}
  }),
  apollo: {
      quizzes: {
          query() {
              return gql`query {
                  quizzes {
                    id
                    title
                }
              }`
          }
      }
  },
};
</script>
