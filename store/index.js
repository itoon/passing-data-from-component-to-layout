export const state = () => ({
  title: ''
})


// Getters
export const getters = {
  getTitle(state) {
    return state.title
  },
}

export const mutations = {
  SET_TITLE(state, data) {
    state.title = data    
  },
}

export const actions = {
  changeTitle({ commit }, data) {
    commit("SET_TITLE", data)
  }
}