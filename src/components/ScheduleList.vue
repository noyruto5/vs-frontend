<template>
  <div>
    <section v-if="!success">
      <p>Sorry, we're not able to retrieve this data.</p>
    </section>
    <section v-else>
      <div v-if="loading">Loading...</div>
      <table v-else class="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(schedule, index) in schedules" :key="index">
            <td>{{ schedule.staff_name }}</td>
            <td>{{ formattedDate(schedule.date) }}</td>
            <td>{{ schedule.time_from }} - {{ schedule.time_to}}</td>
            <td>{{ schedule.title }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import moment from 'moment'
import { bus } from '../main'
import ScheduleService from '@/services/ScheduleService'

export default {
  name: 'ScheduleList',
  //props: ['schedules'],
  data () {
    return {
      schedules: [],
      loading: true,
      success: false
    }
  },

  mounted () {
    this.getSchedules()
  },

  methods: {
    async getSchedules() {
      await ScheduleService.fetchSchedules().then(response => {
        this.success = response.data.success
        this.schedules = response.data.schedules
      }).catch(error => {
        this.success = false
      }).finally(() => this.loading = false)

      console.log(JSON.parse(localStorage.getItem('login-info')))
    },
    formattedDate: function(date) {
      return moment(new Date(date)).format('MM/DD/YY')
    }
  },

  created() {
    bus.$on('updateScheduleList', () => {
      this.getSchedules()
    })
  }

}
</script>
