import Vuex from 'vuex'
import Vue from 'vue'
import ScheduleService from '@/services/ScheduleService'
import moment from 'moment'

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

    async updateSchedule (context, schedule) {
      context.commit('editSchedule', await ScheduleService.updateSchedule(schedule).then(response => {
        return response.data.data.success
      }))
    },

    async deleteSchedule (context, _id) {
      context.commit('removeSchedule', await ScheduleService.deleteSchedule(_id).then(response => {
        return response.data.data.success
      }))
    },

    setSelectedSchedule (context, scheduleId) {
      context.commit('selectedSchedule', scheduleId)
    }
  },

  mutations: { // = responsible for setting and updating the state
    setSchedules (state, schedules) {
      schedules.forEach(el => {
        el.date = moment(new Date(el.date)).format('YYYY-MM-DD')
      });
      state.schedules = schedules
    },

    saveSchedule (state) {
    },

    editSchedule (state) {
    },

    removeSchedule (state) {
    },

    selectedSchedule (state, scheduleId) {
      let schedule = state.schedules.find(item => item._id === scheduleId)
      state.selectedSchedule = schedule
    }
  }
})
