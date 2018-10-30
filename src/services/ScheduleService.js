import Api from '@/services/Api'

export default {
  fetchSchedules (email) {
    return Api().get('api/schedule/all/?email=' + email)
  },
  addSchedule (params) {
    return Api().post('api/schedule/', params)
  },
  updateSchedule (params) {
    return Api().put('api/schedule/', params)
  },
  deleteSchedule (ids) {
    return Api().delete('api/schedule/?_id=' +ids._id + '&event_id=' + ids.event_id)
  }
}
