<template>
  <div>
    <form autocomplete="off">
      <table>
        <body>
          <tr>
            <td>Employee</td>
            <td class="td-input">
              <input type="text" id='staff_name' class="form-control" v-model=selectedSchedule.staff_name disabled required/>
            </td>
          </tr>
          <tr>
            <td>Title</td>
            <td><input type="text" id='title' class="form-control" v-model=selectedSchedule.title required/></td>
          </tr>
          <tr>
            <td>Date</td>
            <td><input type="date" id='date' class="form-control" v-model=selectedSchedule.date required/></td>
          </tr>
          <tr>
            <td>Time&nbsp;From</td>
            <td><input type="text" id='time_from' class="form-control" v-model="selectedSchedule.time_from" required></td>
          </tr>
          <tr>
            <td>Time&nbsp;To</td>
            <td><input type="text" id='time_to' class="form-control" v-model="selectedSchedule.time_to" required/></td>
          </tr>
        </body>
      </table>
      <button type="button" id="btn-add" class="btn btn-primary" @click="updateSchedule">Update Schedule</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UpdateSchedule',
  props: ['selectedSchedule'],
  data () {
    return {
    }
  },

  methods: {
    updateSchedule() {
      this.$store.dispatch('updateSchedule', this.selectedSchedule).then(() => {
        alert('Record successfully updated.')
        this.$router.push('/')
      })
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

