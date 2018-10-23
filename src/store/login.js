import Vuex from 'vuex'
import Vue from 'vue'
import LoginService from '@/services/LoginService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // = data
    staffInfo: [],
    loginInfo: {},
  },

  getters: { // = computed properties
  },

  actions: { // = methods
    async getStaffInfo (context, query) {
      console.log(query)
      context.commit('setStaffs', await LoginService.searchStaffs(query).then(response => {
        return response.data.data
      }))
    },
  },

  mutations: { // = responsible for setting and updating the state
    setStaffs (state, staffInfo) {
      state.staffInfo = staffInfo
    }
  }
})
