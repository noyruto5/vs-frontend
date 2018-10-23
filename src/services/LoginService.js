import GmsApi from '@/services/GmsApi'

export default {
  searchStaffs (params) {
    return GmsApi().get('api/authenticate/searchStaffs/' + params)
  },
  authenticate (params) {
    return GmsApi().post('api/authenticate', params)
  }
}
