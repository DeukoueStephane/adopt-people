<template>
  <div>
    <PeopleTable
      species="women"
      :peoples="women"
    />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import PeopleTable from '@/components/PeopleTable.vue'


  export default {
    components: {
      PeopleTable
    },
    data() {
      return {}
    },
    computed: {
      ...mapState(['women'])
    }
  }
</script>
