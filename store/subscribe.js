export const state = () => ({
  email: "",
})
export const mutations = {


  SET_EMAIL(state, payload) {
    state.email = payload
  }


}


// Getters
export const getters = {
  getEmail: state => state.email

}
