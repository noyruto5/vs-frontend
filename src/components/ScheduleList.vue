<template>
  <div>
    <!-- <section>
      <p>Sorry, we're not able to retrieve this data.</p>
    </section> -->
    <section>
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
            <td>
              <span class="fa fa-edit" @click="selectItem(index)"></span>&nbsp;
              <span class="fa fa-remove"></span>
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
      selectedItem: null
    }
  },

  methods: {
    formattedDate: function(date) {
      return moment(new Date(date)).format('MM/DD/YY')
    },
    selectItem: function(index) {
      this.selectedItem =  this.schedules[index]
    },
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
  color: green;
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
