<template>
  <div>
    <form autocomplete="off">
      <table>
        <body>
          <tr>
            <td>Employee</td>
            <td class="td-input">
              <input type="text" id='staff_name' class="form-control" v-bind:value="staff_name" disabled required/>
            </td>
          </tr>
          <tr>
            <td>Title</td>
            <td><input type="text" id='title' class="form-control" v-model="title" required/></td>
          </tr>
          <tr>
            <td>Date</td>
            <td>
              <vue-ctk-date-time-picker
                v-model="date"
                :dark="darkMode"
                format="YYYY-MM-DD"
                color="#287696"
                formatted="ddd D MMM YYYY"
                label="Choose date"
                disable-time
              />
            </td>
          </tr>
          <tr>
            <td>Time</td>
            <td>
              <tr>
                <td>
                  <vue-ctk-date-time-picker
                    id="time_from"
                    v-model="time_from"
                    :minute-interval="minuteInterval2"
                    :disabled="false"
                    :dark="darkMode"
                    formatted="hh:mm a"
                    format="HH:mm"
                    time-format="hh:mm a"
                    label="Choose time"
                    disable-date
                  />
                </td>
                <td>&tilde;</td>
                <td>
                  <vue-ctk-date-time-picker
                    id="time_to"
                    v-model="time_to"
                    :minute-interval="minuteInterval2"
                    :disabled="false"
                    :dark="darkMode"
                    formatted="hh:mm a"
                    format="HH:mm"
                    time-format="hh:mm a"
                    label="Choose time"
                    disable-date
                  />
                </td>
              </tr>
            </td>
          </tr>
        </body>
      </table>
      <button type="button" id="btn-add" class="btn btn-primary" @click="addSchedule">Add Schedule</button>
    </form>
  </div>
</template>

<script>
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.min.css'

export default {
  name: 'AddSchedule',
  components: {
    VueCtkDateTimePicker
  },
  data () {
    return {
      staff_id: null,
      staff_name: '',
      title: '',
      date: new Date(),
      time_from: '08:00',
      time_to: '18:00',
      email: '',
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
        time_to: this.time_to,
        email: this.email,
        timezone_offset: new Date().getTimezoneOffset()
      }

      this.$store.dispatch('addSchedule', newProduct).then(() => {
        this.title = ''
        this.date = new Date(),
        this.time_from = '08:00',
        this.time_to = '18:00',

        alert('New record successfully added.')
        this.$store.dispatch('getSchedules')
      })
    }
  },

  created () {
    const loginInfo = JSON.parse(localStorage.getItem('login-info'))
    this.staff_id = loginInfo.user._id
    this.staff_name = loginInfo.user.name
    this.email = loginInfo.user.email_pc
  }
}
</script>

<style scoped>
table {
  margin: auto;
  width: 500px;
}
table td {
  padding: 5px;
}
.td-input {
  width: 400px;
}
#btn-add {
  margin-top: 10px;
}
</style>

