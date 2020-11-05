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
                class="shrink mr-2 logo-home"
                contain
                :src="image"
                transition="scale-transition"
                width="40"
                @click="$router.push('/')"
        />

      </div>

      <v-spacer></v-spacer>
      <v-btn color="pink darken-1" @click="$router.push('/quizz/create')">
        Créer un Squizz
      </v-btn>

    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
    //import Leaderboard from "@/components/Leaderboard";
    //import QuizzPage from "./components/QuizzPage";
    //import ListeQuizz from "./components/ListeQuizz";


    export default {
        name: 'App',

        data(){
            return {
                image: require('@/assets/Cute.png')
            }
        }
        /*components: {
            QuizzPage, ListeQuizz
            //Leaderboard
        }*/
    }
</script>

<style>
  .logo-home{
    cursor: pointer;
  }
</style>