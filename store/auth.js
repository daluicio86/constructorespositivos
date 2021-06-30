// States
export const state = () => ({
  user: {},
});

// Mutations
export const mutations = {
  USER_LOGIN (state, value) {
    console.log('SET_USERAUTH', value);
    state.user = value;
  },
  USER_LOGOUT (state) {
    state.user={};
  }
};

// Actions
export const actions = {
  
  login({ commit }) {
    commit('USER_LOGIN')
  },
  logout({ commit }) {
    commit('USER_LOGOUT')
  }
  
};

// Getters
export const getters = {
  getUser: state => state.user,
};
