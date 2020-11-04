<template>
<v-container>
    <h2 class="pink--text text--darken-2">Création d'un nouveau Squizz</h2>
    <v-form>
      <v-text-field v-model="title" label="Nom du Squizz"></v-text-field>
      <v-text-field v-model="description" label="Description du Squizz"></v-text-field>
      <v-text-field type="password" v-model="password" label="Mot de passe" ></v-text-field>
      <component v-for="question in questionList" v-bind:is="question.type" :id="question.id" :key="question.id" @update="updateQuestion" @delete="deleteQuestion"></component>
    </v-form>
    <v-btn @click="ajouteQuestion" id="ajouter">
      Ajouter une question
    </v-btn>
    <v-btn v-if="this.questionList.length > 0" @click="save">
      Sauvegarder
    </v-btn>

</v-container>
</template>

<script>
import question from "@/components/question";
import gql from 'graphql-tag'
export default {
name: "addSquizz.vue",
  components: {question},
  data: ()=> ({
    title: "",
    description: "",
    password:"",
    questionList: [],
    count: 0,
  }),
  methods: {
    ajouteQuestion() {
      this.questionList.push({
        'type': question,
        id: this.count++,
        questionTitle:"",
        reponses: {reponseA: "", reponseB:"", reponseC:"",reponseD:""}
      })
    },
    updateQuestion(emission){
      this.questionList[emission.id].reponses=emission.reponses
      this.questionList[emission.id].questionTitle=emission.questionTitle
    },
    deleteQuestion (id) {
      const index= this.questionList.findIndex(c => c.id === id)
      this.questionList.splice(index, 1)
    },
    save(){
      console.log("au début")
      this.$apollo.mutate({
        mutation: gql`mutation {
        addQuizz(title: "${this.title}", password: "${this.password}", description: "${this.description}") {
          id
          title
          password
          description
        }
      }`,
      }).then((data) => {
        // Result
        for (let i=0 ; i < this.questionList.length ; i++){
          this.$apollo.mutate({
            mutation: gql`mutation {
            addQuestion(title: "${this.questionList[i].questionTitle}", quizzId: "${data.data.addQuizz.id}"){
            title
            id
            }
            }`
              }
          ).then((data) => {

            let reponses = ['reponseA', 'reponseB', 'reponseC', 'reponseD']
            for (let reponse of reponses){
              console.log(this.questionList[i].reponses[reponse])
              let bool = false
              if(reponse === 'reponseA')
                bool = true
              this.$apollo.mutate({
                    mutation: gql`mutation {
                  addAnswer(text: "${this.questionList[i].reponses[reponse]}", correct: ${bool}, questionId: "${data.data.addQuestion.id}"){
                  id}}`
                  }
              )
            }
              }
          )
        }
      })

    }

  }
}
</script>

<style scoped>

</style>