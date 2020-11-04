<template>
    <v-container>
        <h2 class="pink--text text--darken-2">{{ quizz.title }}</h2>
        <p class="text-justify">
            {{quizz.description}}
        </p>

        <v-form ref="form">

          <v-container>
            <v-row>
                <v-col
                  cols="12"
                  md="2"
                >
                  <v-text-field
                    v-model="name"
                    :counter="10"
                    :rules="nameRules"
                    label="Name"
                    required
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  md="2"
                >
                  <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="validate, this.$router.push(`/quizz/${quizz.id}/questions`)"
                  >
                    Commencer le test
                  </v-btn>
                </v-col>
            </v-row>
          </v-container>

        </v-form>

        <v-card>
            <v-card-title>
                <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table
                    :headers="headers"
                    :items="quizz.scores"
                    :search="search"
            ></v-data-table>
        </v-card>
    </v-container>
</template>

<script>
    import gql from 'graphql-tag'
    export default {
        name: "Leaderboard.vue",

        beforeMount() {
            this.$apollo.queries.quizz.refetch();
        },

        data () {
          return {
              valid: true,
              name: '',
              nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
              ],

              headers: [
                  {
                      text: 'Pseudo',
                      align: 'start',
                      filterable: true,
                      value: 'username',
                  },
                  {
                      text: 'Score',
                      align: 'start',
                      filterable: true,
                      value: 'score'
                  }
              ],
              search: '',
              quizz: {}
          }
        },

        methods: {
          validate () {
            this.$refs.form.validate()
          },

          // changed: function(event) {
          //   this.$store.commit('newUser', event.target.value)
          // }
          // startQuizz () {
          //   this.$router.push(`/quizz/${quizz.id}/questions`)
          // }
        },

        apollo: {
            quizz: {
                query () {
                    return gql`query {
                      quizz(id: "${this.$route.params.idQuizz}") {
                        title,
                        description,

                        scores {
                            id
                            score
                            username
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