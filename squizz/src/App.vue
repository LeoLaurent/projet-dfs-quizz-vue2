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
    export default {
        name: 'App',
    };
</script>
