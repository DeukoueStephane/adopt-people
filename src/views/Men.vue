<template>
  <div>
    <PeopleTable
      species="men"
      :peoples="men"
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
      ...mapState(['men'])
    }
  }
</script>
