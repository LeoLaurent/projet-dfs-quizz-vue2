<template>
    <v-container>
        <v-layout justify-center>
            <v-card>
                <v-card-title>{{ question.title }}</v-card-title>
                <v-card-text>
                    <v-radio-group v-model="radioGroup">
                        <v-radio :label="question.answer.text"></v-radio>
                    </v-radio-group>
                </v-card-text>
            </v-card>
        </v-layout>
    </v-container>
</template>

<script>
    //import gql from 'graphql-tag'
    export default {
        name: "QuizzPage",
        props: {
            idQuizz: String
        },
        data: () => ({
        }),
        apollo: {
            quizz: gql`query {
                quizz(id:
            }`
        }
    }
</script>

<style scoped>

</style>