export default {
  count_peoples: (state) => {
    return state.men.length + state.women.length
  },
  get_all_men: (state) => { 
    return state.peoples.filter((peoples) => {
      return peoples.species === 'men'
    })
  }
}
