<template>
<v-container class="pregunta">
  <v-form>
    <v-row>
      <v-col cols="12" md="11">
        <v-text-field
            v-model="questionTitle"
            label="Question"
            :rules="contenuRules"
            required
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="1">
        <v-btn @click="effacer(id)" class="effaceur">
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
            outlined
            :rules="contenuRules"
            color="green lighten-2"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field
            v-model="reponses.reponseB"
            label="Mauvaise Réponse"
            required
            outlined
            :rules="contenuRules"
            color="amber darken-1"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field
            v-model="reponses.reponseC"
            label="Mauvaise Réponse"
            required
            outlined
            :rules="contenuRules"
            color="amber darken-1"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field
            v-model="reponses.reponseD"
            label="Mauvaise Réponse"
            required
            outlined
            :rules="contenuRules"
            color="amber darken-1"
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
        questionTitle: "",
        reponses: {reponseA: "", reponseB:"", reponseC:"",reponseD:""},
        contenuRules:[
          v => !!v || 'Obligatoire'
        ]
      }
  ),
  watch: {
    questionTitle (newValue){
      var emission = {id: this.id, questionTitle: newValue, reponses: this.reponses}
      this.$emit('update', emission)
    },
    reponses: {
      deep: true,
      handler(newValue) {
        var emission = {id: this.id, questionTitle: this.questionTitle, reponses: newValue}
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