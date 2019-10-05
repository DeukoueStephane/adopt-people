<template>
  <div class="">
    <h3>Name: {{ people_X.name }} ({{$route.params.species}})</h3>
    <p>Age: {{ people_X.age }} years old</p>
    <p>Location: {{ people_X.location }}</p>
    <p>Gender: {{ people_X.gender }}</p>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    data() {
      return {
        people_X: {}
      }
    },
    computed: {//to have access to the women and men informations
      ...mapState(['women','men'])
    },
    mounted() {
        const people = this[this.$route.params.species][this.$route.params.id]//same as this.men == this['men']
        this.people_X = people
    }
  }
</script>
