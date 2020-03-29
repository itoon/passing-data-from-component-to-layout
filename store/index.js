export const state = () => ({
  title: ''
})

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