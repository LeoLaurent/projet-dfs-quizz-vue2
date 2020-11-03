<template>
<v-container>
  <v-form>
    <v-row>
      <v-col cols="12" md="11">
        <v-text-field
            v-model="question"
            label="Question"
            required
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="1">
        <v-btn @click="effacer(id)">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
          </svg>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="3">
        <v-text-field
            v-model="reponses.reponseA"
            label="Bonne Réponse"
            required
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field
            v-model="reponses.reponseB"
            label="Mauvaise Réponse"
            required
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field
            v-model="reponses.reponseC"
            label="Mauvaise Réponse"
            required
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field
            v-model="reponses.reponseD"
            label="Mauvaise Réponse"
            required
        ></v-text-field>
      </v-col>
    </v-row>
  </v-form>
</v-container>
</template>

<script>
export default {
  name: "question",
  props:['id'],
  data: ()=>({
        question: "",
        reponses: {reponseA: "", reponseB:"", reponseC:"",reponseD:""}
      }
  ),
  watch: {
    question (newValue){
      var emission = {id: this.id, question: newValue, reponses: this.reponses}
      this.$emit('update', emission)
    },
    reponses: {
      deep: true,
      handler(newValue) {
        var emission = {id: this.id, question: this.question, reponses: newValue}
        this.$emit('update', emission)
      }
    }
  },
  methods: {
    effacer (id) {
      this.$emit('delete', id)
    }
  }
}
</script>

<style scoped>

</style>