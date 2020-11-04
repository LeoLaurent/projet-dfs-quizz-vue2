<template>
<v-container>
    <h2 class="pink--text text--darken-2">Création d'un nouveau Squizz</h2>
    <v-form>
      <v-text-field v-model="title" label="Nom du Squizz" ></v-text-field>
      <component v-for="question in questionList" v-bind:is="question.type" :id="question.id" :key="question.id" @update="updateQuestion" @delete="deleteQuestion"></component>
    </v-form>
    <v-btn @click="addQuestion">
      Ajouter une question
    </v-btn>
    <v-btn v-if="this.questionList.length > 0" @click="save">
      Sauvegarder
    </v-btn>

</v-container>
</template>

<script>
import question from "@/components/question";
export default {
name: "addSquizz.vue",
  components: {question},
  data: ()=> ({
    title: "",
    questionList: [],
    count: 0,
  }),
  methods: {
    addQuestion() {
      this.questionList.push({
        'type': question,
        id: this.count++,
        question:"",
        reponses: {reponseA: "", reponseB:"", reponseC:"",reponseD:""}
      })
    },
    updateQuestion(emission){
      this.questionList[emission.id].reponses=emission.reponses
      this.questionList[emission.id].question=emission.question
    },
    deleteQuestion (id) {
      const index= this.questionList.findIndex(c => c.id === id)
      this.questionList.splice(index, 1)
    },
    save(){
    }

  }
}
</script>

<style scoped>

</style>