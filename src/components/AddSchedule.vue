<template>
  <div>
    <form autocomplete="off">
      <table>
        <body>
          <tr>
            <td>Employee</td>
            <td class="td-input">
              <input type="text" id='staff_name' class="form-control" v-model="staff_name" disabled required/>
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
  </div>
</template>

<script>
export default {
  name: 'AddSchedule',
  data () {
    return {
      staff_id: null,
      staff_name: '',
      title: '',
      date: '',
      time_from: '',
      time_to: '',
      success: false
    }
  },

  methods: {
    addSchedule() {

      let newProduct = {
        staff_id: this.staff_id,
        staff_name: this.staff_name,
        title: this.title,
        date: this.date,
        time_from: this.time_from,
        time_to: this.time_to
      }

      this.$store.dispatch('addSchedule', newProduct).then(() => {
        this.title = ''
        this.date = ''
        this.time_from = ''
        this.time_to = ''

        alert('New record successfully added.')
        this.$store.dispatch('getSchedules')
      })
    }
  },

  created () {
    const loginInfo = JSON.parse(localStorage.getItem('login-info'))
    this.staff_id = loginInfo.user._id
    this.staff_name = loginInfo.user.name
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

