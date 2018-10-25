import Api from '@/services/Api'

export default {
  fetchSchedules () {
    return Api().get('api/schedule/all')
  },
  addSchedule (params) {
    return Api().post('api/schedule/', params)
  },
  updateSchedule (params) {
    return Api().put('api/schedule/', params)
  },
  deleteSchedule (params) {
    return Api().delete('api/schedule/?_id=' + params)
  }
}
