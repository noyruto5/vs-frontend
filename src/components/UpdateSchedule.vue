<template>
  <div>
    <form autocomplete="off">
      <table>
        <body>
          <tr>
            <td>Employee</td>
            <td class="td-input">
              <input type="text" id='staff_name' class="form-control" v-bind:value=selectedSchedule.staff_name disabled required/>
            </td>
          </tr>
          <tr>
            <td>Title</td>
            <td><input type="text" id='title' class="form-control" v-model=selectedSchedule.title required/></td>
          </tr>
          <tr>
            <td>Date</td>
            <td>
              <vue-ctk-date-time-picker
                v-model=selectedSchedule.date
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
                    v-model=selectedSchedule.time_from
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
                    v-model=selectedSchedule.time_to
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
      <button type="button" id="btn-add" class="btn btn-primary" @click="updateSchedule">Update Schedule</button>
    </form>
  </div>
</template>

<script>
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.min.css'

export default {
  name: 'UpdateSchedule',
  props: ['selectedSchedule'],
  components: {
    VueCtkDateTimePicker
  },
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

