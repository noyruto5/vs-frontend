import axios from 'axios'

export default() => {
  return axios.create({
    // baseURL: 'http://192.168.0.9:3000'
    baseURL: 'http://13.231.231.252:3000'
  })
}
