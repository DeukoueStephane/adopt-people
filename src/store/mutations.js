export default {
  append_people: (state, {people, species}) => {
    state[species].push(people)
  }
}
