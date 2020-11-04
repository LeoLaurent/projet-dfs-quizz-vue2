<template>
  <v-simple-table height="300px">
      <thead>
        <tr>
          <th class="text-left">
            Pseudo
          </th>
          <th class="text-left">
            Score
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="entry in scores"
          :key="entry.username"
        >
          <td>salut</td>
          <td>69</td>
        </tr>
      </tbody>
  </v-simple-table>
</template>

<script>
    import gql from 'graphql-tag'
    export default {
        name: "Leaderboard.vue",

        beforeMount() {
            console.log(this.$apollo);
            this.$apollo.queries.scores.refetch();
        },

        data () {
          return {
            search: '',
            headers: [
              {
                text: 'Pseudo',
                align: 'start',
                filterable: true,
                value: 'pseudo',
              },
              { text: 'Score', value: 'score' },
            ],
            scores: {},
          }
        },

        apollo: {
            scores: {
                query() {
                    return gql`query {
                      scores {
                        username
                        score
                      }
                    }`
                }
            }

        }
    }
</script>

<style scoped>

</style>