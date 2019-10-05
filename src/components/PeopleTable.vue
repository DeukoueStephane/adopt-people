<template>
  <div>
    <h1>{{species}} for Adoption</h1>
    <b-table striped hover :items="peoples">
      <template v-slot:cell(name)="data">
        <!-- `data.value` is the value after formatted by the Formatter -->
        <router-link :to="`/peoples/${species}/${data.index}`">{{ data.value }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
  export default {
    props: {
      species: String,
      peoples: Array
    }
  }
</script>
