<template>
  <div id="home-page">
    <a href="#" @click="logout">Logout</a>
    <h1>Schedules</h1> <br/>
    <update-schedule v-bind:selected-schedule="selectedSchedule" />
    <br/>
    <schedule-list/>
    <!-- <p>
      <router-link to="/login">Login</router-link>
    </p> -->
  </div>
</template>

<script>
import ScheduleList from './ScheduleList.vue'
import UpdateSchedule from './UpdateSchedule.vue'

export default {
  name: 'HomePage',
  data () {
    return {
      //theSchedules: []
    }
  },

  components: {
    'schedule-list': ScheduleList,
    'update-schedule': UpdateSchedule
  },

  methods: {
    logout () {
      localStorage.removeItem('login-info')
      this.$router.push('/login')
    }
  },


  computed: {
    selectedSchedule () {
      return this.$store.state.selectedSchedule
    }
  },

  created () {
    if (!localStorage.getItem('login-info')) {
      this.$router.push('/login')
    }
  }
}
</script>
