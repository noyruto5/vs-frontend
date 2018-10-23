<template>
  <div id="home-page">
    <h1>Schedules</h1> <br/>
    <add-schedule/> <br/>
    <schedule-list/>
    <!-- <p>
      <router-link to="/login">Login</router-link>
    </p> -->
  </div>
</template>

<script>
import AddSchedule from './AddSchedule.vue'
import ScheduleList from './ScheduleList.vue'

export default {
  name: 'HomePage',
  data () {
    return {
      //theSchedules: []
    }
  },

  components: {
    'add-schedule': AddSchedule,
    'schedule-list': ScheduleList
  }
}
</script>
