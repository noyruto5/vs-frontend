import Api from '@/services/Api'

export default {
  fetchSchedules () {
    return Api().get('api/schedule/all')
  },
  addSchedule (params) {
    return Api().post('api/schedule/', params)
  }
}