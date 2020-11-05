<template>
    <v-container>
        <h2 class="pink--text text--darken-2">{{ quizz.title }}</h2>
            <v-row v-if="error">
                <v-col>
                    <v-alert type="error" id="error-form">
                        Vous n'avez pas répondu à toutes les questions.
                    </v-alert>
                </v-col>
            </v-row>
            <v-row dense flex align-center justify-center>
                <v-col cols="12" md="12" v-for="question in shuffledQuestions" :key="question.id" >
                    <v-card>
                        <v-card-title>{{ question.title }}</v-card-title>
                        <v-card-text>
                            <v-radio-group v-model="answers[question.id]">
                                <v-radio color="pink darken-1" v-for="ans in question.answers" :key="ans.id" :label="ans.text"
                                         :value="ans.id"></v-radio>
                            </v-radio-group>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="12">
                    <v-btn id="send-quizz" block @click="submitForm">Valider les réponses</v-btn>
                </v-col>
            </v-row>
    </v-container>
</template>

<script>
    import gql from 'graphql-tag'
    import _ from 'lodash'

    export default {
        name: "QuizzPage",
        beforeMount() {
            this.$apollo.queries.quizz.refetch();
        },
        data(){
            return {
                error: false,
                answers: {},
                quizz: {}
            }
        },
        computed: {
            'shuffledQuestions': function() {
                return _.shuffle(this.quizz.questions)
            }
        },
        methods: {
            submitForm() {
                if (Object.keys(this.answers).length === this.quizz.questions.length && this.quizz.questions.length
                    !== 0){
                    let answers = this.answers;
                    fetch(`http://localhost:3000/api/current/quizz/${this.$route.params.idQuizz}/answers`, {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            answers,
                            username: this.$store.getters.username
                        })
                    }).then(resp => resp.json())
                        .then(resp => {console.log(resp.score._id)
                            this.$router.push(`/quizz/${resp.score.quizzId}/${resp.score._id}`);
                        });
                } else {
                    this.error = true;
                }
            }
        },
        apollo: {
            quizz: {
                query() {
                    return gql`query {
                        quizz(id: "${this.$route.params.idQuizz}"){
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