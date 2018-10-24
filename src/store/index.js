import Vuex from 'vuex'
import Vue from 'vue'
import ScheduleService from '@/services/ScheduleService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // = data
    schedules: [],
    selectedSchedule: {}
  },

  getters: { // = computed properties
    selectedSchedule (state, id) {
      const schedule = state.schedules.find(schedule => schedule._id === id)
      return schedule
    }
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
    },

    setSelectedSchedule (context, scheduleId) {
      //let schedule = schedules.find()
      context.commit('selectedSchedule', )
    }
  },

  mutations: { // = responsible for setting and updating the state
    setSchedules (state, schedules) {
      state.schedules = schedules
    },
    saveSchedule (state) {
    },
    selectedSchedule (state, schedule) {
      state.selectedSchedule = schedule
    }
  }
})
