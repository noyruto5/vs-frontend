<template>
  <div>
    <!-- <section>
      <p>Sorry, we're not able to retrieve this data.</p>
    </section> -->
    <section>
      <div v-if="loading">Loading...</div>
      <table v-else class="table table-hover table-striped table-dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Title</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(schedule, index) in schedules" :key="index">
            <td>{{ schedule.staff_name }}</td>
            <td>{{ schedule.date }}</td>
            <td>{{ schedule.time_from }} - {{ schedule.time_to}}</td>
            <td>{{ schedule.title }}</td>
            <td>
              <span class="fa fa-edit" @click="selectSchedule(schedule._id)"></span>&nbsp;
              <span class="fa fa-remove" @click="deleteSchedule(schedule._id, schedule.event_id)"></span>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'ScheduleList',
  data () {
    return {
      loading: true,
      //selectedSchedule: null
    }
  },

  methods: {
    selectSchedule: function(id) {
      this.$store.dispatch('setSelectedSchedule', id)
      this.$router.push('/update')
    },

    deleteSchedule: function(_id, event_id) {
      let doDelete = confirm("Do you want to delete this schedule?");
      if (doDelete) {
        this.$store.dispatch('deleteSchedule', { _id, event_id}).then(() => {
          this.$store.dispatch('getSchedules')
        })
      }
    }
  },

  created () {
    this.$store.dispatch('getSchedules').then(() => this.loading = false )
  },

  computed: {
    schedules () {
      return this.$store.state.schedules
    }
  }

}
</script>

<style scoped>
.fa-edit {
  color: yellowgreen;
}
.fa-edit:hover {
  cursor: pointer;
}
.fa-remove {
  color: red;
}
.fa-remove:hover {
  cursor: pointer;
}
</style>
