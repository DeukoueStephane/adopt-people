<template>
  <div class="home">
    <h1>Adopt your new best friend</h1><br>
    <span>Number of people available: {{count_peoples}}</span><br><br>
    <!--<pre>{{get_all_men}}</pre><br><br>-->
    <button @click="togglePeopleForm" class="btn btn-primary" name="button">Add new people</button>

    <b-form @submit.prevent="handle_submit" v-if="showPeopleForm">

      <b-form-group id="input-group-2" label="Name:" label-for="input-2">
        <b-form-input
        id="input-2"
        type="text"
        v-model="formData.name"
        required
        placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Age:" label-for="input-2">
        <b-form-input
        id="input-2"
        type="number"
        v-model="formData.age"
        required
        placeholder="Enter age"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Location:" label-for="input-2">
        <b-form-input
        id="input-2"
        type="text"
        v-model="formData.location"
        required
        placeholder="Enter location"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Gender:" label-for="input-3">
        <b-form-select
        id="input-3"
        v-model="formData.species"
        :options="['women', 'men']"
        required
        placeholder="Select gender"
        ></b-form-select>
      </b-form-group>


      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home',
  data() {
    return {
      showPeopleForm: false,
      formData: {
        name: '',
        age: 0,
        location: '',
        gender: '',
        species: null
      }
    }
  },
  computed: {
    ...mapGetters(['count_peoples','get_all_men'])
  },
  methods: {
    ...mapActions([
      'addPeople'
    ]),
    togglePeopleForm() {
      this.showPeopleForm = !this.showPeopleForm
    },
    handle_submit(){
      const {name, age, location, species} = this.formData
      const payload = {
        people: {name, age, location},
        species
      }
      this.addPeople(payload)
      //reset form after submiting
      this.formData = {
        name: '',
        age: 0,
        location: '',
        species: null
      }
    }
  }
}
</script>
