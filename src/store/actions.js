export default {
  addPeople: ({commit}, payload) => {//payload containts {people, species}
    commit('append_people', payload)//context.commit to call a mutation
  }
}
