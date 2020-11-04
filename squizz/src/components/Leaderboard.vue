<template>
    <v-simple-table dense>
    <template v-slot:default>
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
          v-for="entries for this quizz"
          :key="item.pseudo"
        >
          <td>{{ entry.pseudo }}</td>
          <td>{{ entry.score }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
<script>
export default {
  name: "Leaderboard",
}
</script>

<style scoped>

</style>