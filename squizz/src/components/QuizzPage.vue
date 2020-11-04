<template>
    <v-container>
        <v-layout justify-center>
            <v-card v-for="question in quizz.questions" :key="question.id">
                <v-card-title>{{ question.title }}</v-card-title>
                <v-card-text>
                    <v-radio-group v-model="answers[question.id]">
                        <v-radio v-for="ans in question.answers" :key="ans.id" :label="ans.text"
                                 :value="ans.id"></v-radio>
                    </v-radio-group>
                </v-card-text>
            </v-card>
            <v-btn @click="submitForm">ALLEZ</v-btn>
        </v-layout>
    </v-container>
</template>

<script>
    import gql from 'graphql-tag'
    export default {
        name: "QuizzPage",
        props: {
            idQuizz: String,
        },
        beforeMount() {
            console.log(this.$apollo);
            this.$apollo.queries.quizz.refetch();
        },
        data: () => ({
            answers: {},
            quizz: {}
        }),
        methods: {
          submitForm() {
              console.log()
              let answers = this.answers;
              fetch(`http://localhost:3000/api/current/quizz/${this.idQuizz}/answers`, {
                  method: 'POST',
                  headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({answers})
              }).then(resp => resp.json())
                  .then(resp => {
                      console.log(resp);
                  });
              // {answers : {5fmescouilles: 5flareponse, 5f2emequestion: 5fladeuxziemerep} }
          }
        },
        apollo: {
            quizz: {
                query() {
                    return gql`query {
                      quizz(id: "${this.idQuizz}"){
                        id
                        title
                        questions {
                          id
                          title
                            answers {
                            id
                            text
                            correct
                          }
                        }
                      }
                    }`
                }
            }

        }
    }
</script>

<style scoped>

</style>