<template>
    <v-container>
        <h2 class="pink--text text--darken-2">Liste des Squizz</h2>
        <v-list dense>
            <v-subheader></v-subheader>
            <v-list-item-group color="primary">
                <v-list-item v-for="quizz in quizzes" :key="quizz.id">
                    <v-list-item-content @click="$router.push(`/quizz/${quizz.id}/questions`)">
                        <v-list-item-title v-text="quizz.title" ></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-container>
</template>

<script>
    import gql from 'graphql-tag';

    export default {
        name: "ListeQuizz",
        data: () => ({
            quizzes: {}
        }),
        beforeMount() {
            console.log(this.$apollo);
            this.$apollo.queries.quizzes.refetch();
        },
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
        }
    };
</script>

<style scoped>
    .v-application a {
        text-decoration: none;
        color: black !important;
    }
</style>