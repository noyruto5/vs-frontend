import Vuex from 'vuex'
import Vue from 'vue'
import ScheduleService from '@/services/ScheduleService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // = data
    schedules: []
  },

  getters: { // = computed properties

  },

  actions: { // = methods
    async getSchedules ({commit}) {
      commit('setSchedules', await ScheduleService.fetchSchedules().then(response => {
        return response.data.schedules
      }))
    },

    async addSchedule (context, newSchedule) {
      context.commit('saveSchedule', await ScheduleService.addSchedule(newSchedule).then(response => {
        return response.data.data.success
      }))
    }
  },

  mutations: { // = responsible for setting and updating the state
    setSchedules (state, schedules) {
      state.schedules = schedules
    },
    saveSchedule (state) {
    }
  }
})
