<template>
<v-container>
  <v-col class="mb-4">
      <h1 class="display-2 font-weight-bold mb-3 pink--text text--darken-2" > Bienvenue sur Squizz</h1>

      <p class="subheading">Le site de Squizz mega cools</p>
  </v-col>

  <h4 class="pink--text text--darken-2">Derniers Squizz</h4>
  <v-row justify="align">
    <v-list dense>
      <v-list-item
          v-for="(item, i) in quiz"
          :key="i"
      >
        <v-list-item-content>
          <a :href="item.href" class="pink--text text--lighten-2">{{item.text}}</a>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-row>
</v-container>
</template>

<script>
export default {
name: "Test.vue",
  data: () => ({
    quiz:[
        { text: "Sport",
        href: "https://www.quizz.biz/quizz-343276.html"},
      {text: "Harry Potter",
      href: "https://www.quizz.biz/quizz-99026.html"},
      {text: "Disney",
      href: "https://www.quizz.biz/quizz-1366591.html"}]
  })
}
</script>

<style scoped>

</style>