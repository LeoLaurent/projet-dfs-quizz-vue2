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
      <add-squizz/>
    </v-main>
  </v-app>
</template>

<script>
//import Test from "@/components/Test";
//import QuizzPage from "@/components/QuizzPage";
import addSquizz from "@/components/addSquizz";
export default {
  name: 'App',

  components: {
    // eslint-disable-next-line vue/no-unused-components
     addSquizz,
  },

  data: () => ({
    //
  }),
};
</script>
