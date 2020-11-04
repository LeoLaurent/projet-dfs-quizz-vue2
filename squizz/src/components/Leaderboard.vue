<template>
    <v-container>
        <h2 class="pink--text text--darken-2">{{ quizz.title }}</h2>
        <p class="text-justify">
            {{quizz.description}}
        </p>
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