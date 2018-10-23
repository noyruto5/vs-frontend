<template>
  <form autocomplete="off">
    <table>
      <body>
        <tr>
          <td>Employee</td>
          <td class="td-input">
            <input type="text" id='staff_name' class="form-control" v-model="staff_name" required/>
          </td>
        </tr>
        <tr>
          <td>Title</td>
          <td><input type="text" id='title' class="form-control" v-model="title" required/></td>
        </tr>
        <tr>
          <td>Date</td>
          <td><input type="date" id='date' class="form-control" v-model="date" required/></td>
        </tr>
        <tr>
          <td>Time&nbsp;From</td>
          <td><input type="text" id='time_from' class="form-control" v-model="time_from" required></td>
        </tr>
        <tr>
          <td>Time&nbsp;To</td>
          <td><input type="text" id='time_to' class="form-control" v-model="time_to" required/></td>
        </tr>
      </body>
    </table>
    <button type="button" id="btn-add" class="btn btn-primary" @click="addSchedule">Add Schedule</button>
  </form>
</template>

<script>
import { bus } from '../main'
import ScheduleService from '@/services/ScheduleService'

export default {
  name: 'AddSchedule',
  data () {
    return {
      staff_id: 172,
      staff_name: '',
      title: '',
      date: '',
      time_from: '',
      time_to: '',
      success: false
    }
  },

  methods: {
    async addSchedule() {

      let requestBody = {
        staff_id: this.staff_id,
        staff_name: this.staff_name,
        title: this.title,
        date: this.date,
        time_from: this.time_from,
        time_to: this.time_to
      }

      await ScheduleService.addSchedule(requestBody).then(response => {
        this.success = response.data.data.success
      }).catch(error => {
        this.success = false
      })

      if(this.success) {
        this.staff_name = ''
        this.title = ''
        this.date = ''
        this.time_from = ''
        this.time_to = ''

        bus.$emit('updateScheduleList', '')
      }
    }
  }
}
</script>

<style scoped>
table {
  margin: auto;
  width: 400px;
}
table td {
  padding: 5px;
}
.td-input {
  width: 500px;
}
#btn-add {
  margin-top: 10px;
}
</style>

